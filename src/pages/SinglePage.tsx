// React hooks and generic component typing for dynamic MDX rendering.
import { useEffect, useState, type ComponentType } from "react";
// Router param access for resolving the current page slug.
import { useParams } from "react-router-dom";
// Shared heading component used for page title display.
import { H1 } from "../components/header-and-footer/H1";
// References section that renders cited resources from collected IDs.
import { References } from "../components/resources/References";

// Path prefix used to build an MDX file path from the route slug.
type SinglePageProps = {
  mdFilePath: string;
};

// Shape of dynamically imported MDX modules.
type MdxModule = {
  // Compiled MDX React component.
  default: ComponentType;
  // Optional frontmatter title exported from MDX.
  title?: string;
};

// Map of lazy import functions for compiled MDX modules.
const mdxModules = import.meta.glob<MdxModule>("/src/pages/**/*.mdx");
// Map of lazy import functions for raw MDX source text (used to parse citations).
const rawMdxModules = import.meta.glob<string>("/src/pages/**/*.mdx", {
  query: "?raw",
  import: "default",
});

export function SinglePage({ mdFilePath }: SinglePageProps) {
  // Current slug from the route (for example: "about-team").
  const slug = useParams().slug;
  // Renderable MDX component once loaded.
  const [Content, setContent] = useState<ComponentType | null>(null);
  // Optional title exported by the MDX file.
  const [title, setTitle] = useState<string | null>(null);
  // Tracks which path was last loaded to keep loading state accurate during route changes.
  const [loadedPath, setLoadedPath] = useState<string | null>(null);
  // Unique list of citation IDs found in InTextCitation components inside MDX source.
  const [referenceIds, setReferenceIds] = useState<string[]>([]);

  // Full MDX path resolved from prop prefix + slug.
  const resolvedPath = slug ? `${mdFilePath}${slug}.mdx` : null;
  // Lazy importer for the compiled MDX module.
  const importMdx = resolvedPath ? mdxModules[resolvedPath] : undefined;
  // Lazy importer for raw MDX text.
  const importRawMdx = resolvedPath ? rawMdxModules[resolvedPath] : undefined;

  useEffect(() => {
    // If no matching module exists, clear citations and skip loading.
    if (!importMdx || !resolvedPath) {
      setReferenceIds([]);
      return;
    }

    // Prevent state updates after unmount or when the effect is invalidated.
    let isMounted = true;

    // Load compiled MDX component + optional title.
    importMdx()
      .then((module) => {
        if (!isMounted) {
          return;
        }
        setContent(() => module.default);
        setTitle(module.title ?? null);
        setLoadedPath(resolvedPath);
      })
      .catch(() => {
        if (!isMounted) {
          return;
        }
        setContent(null);
        setTitle(null);
        setLoadedPath(resolvedPath);
      });

    // Load raw MDX source and extract all InTextCitation id values.
    if (importRawMdx) {
      importRawMdx()
        .then((source) => {
          if (!isMounted) {
            return;
          }

          // Match self-closing tags like: <InTextCitation id="123" />
          const matches = source.matchAll(/<InTextCitation\s+[^>]*id=["']([^"']+)["'][^>]*\/>/g);
          // Keep insertion order while removing duplicate citation IDs.
          const ids = Array.from(new Set(Array.from(matches, (match) => match[1])));
          setReferenceIds(ids);
        })
        .catch(() => {
          if (!isMounted) {
            return;
          }
          // Fall back gracefully if raw import parsing fails.
          setReferenceIds([]);
        });
    } else {
      // No raw module available for this path.
      setReferenceIds([]);
    }

    // Cleanup for route changes/unmount.
    return () => {
      isMounted = false;
    };
  }, [importMdx, importRawMdx, resolvedPath]);

  // Show loading while waiting for the current route path to finish loading.
  const isLoading = !!importMdx && loadedPath !== resolvedPath;
  // Not found if slug/module is missing or content failed to load.
  const isNotFound = !slug || !importMdx || (!isLoading && !Content);

  return (
    <main id="main-content">
      {/* Render MDX title if provided by the module. */}
      <H1>{title}</H1>
      
      {/* Async loading state for dynamic import. */}
      {isLoading && <p>Loading content...</p>}
      {/* Missing or failed MDX module state. */}
      {isNotFound && <p>Page content not found.</p>}
      {/* Main page body rendered from the loaded MDX component. */}
      {!isLoading && !isNotFound && Content && <Content />}

      {/* References section generated from extracted in-text citation IDs. */}
      <References ids={referenceIds} />
    </main>
  );
}

