import { type FormEvent, useState } from "react";
import { H1 } from "../../components/header-and-footer/H1";
import { ResourceCard } from "../../components/resources/ResourceCard";
import resourcesData from "../../data/resources/resources.json";
import "./ResourceLibrary.css";

type Resource = {
  id?: string;
  title?: string;
  format?: number | number[];
};

type FilterKey = "book" | "ebook" | "video" | "article" | "internetSource";

// Maps each checkbox key to the numeric format value used in resources.json.
const FILTER_TO_FORMAT: Record<FilterKey, number> = {
  book: 1,
  ebook: 2,
  video: 3,
  article: 4,
  internetSource: 5,
};

export function ResourceLibrary() {
  // Normalize the imported JSON to always be an array.
  const allResources: Resource[] = Array.isArray(resourcesData)
    ? resourcesData
    : [resourcesData];

  // Tracks which checkboxes are currently selected.
  const [selectedFilters, setSelectedFilters] = useState<
    Record<FilterKey, boolean>
  >({
    book: false,
    ebook: false,
    video: false,
    article: false,
    internetSource: false,
  });

  // Resources currently shown in the UI (all by default).
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(allResources);

  // Updates a single checkbox value while preserving the others.
  function handleCheckboxChange(filter: FilterKey, isChecked: boolean) {
    setSelectedFilters((current) => ({ ...current, [filter]: isChecked }));
  }

  // Applies filters on form submit and prevents a full page reload.
  function handleApplyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Convert selected checkbox keys into their matching numeric format IDs.
    const selectedFormatIds = (Object.keys(selectedFilters) as FilterKey[])
      .filter((filterKey) => selectedFilters[filterKey])
      .map((filterKey) => FILTER_TO_FORMAT[filterKey]);

    // If nothing is selected, show every resource.
    if (selectedFormatIds.length === 0) {
      setFilteredResources(allResources);
      return;
    }

    // Keep resources that have at least one format matching the selected IDs.
    const nextResources = allResources.filter((resource) => {
      const formatValues = Array.isArray(resource.format)
        ? resource.format
        : [resource.format ?? 0];

      return formatValues.some((formatValue) =>
        selectedFormatIds.includes(formatValue),
      );
    });

    setFilteredResources(nextResources);
  }

  return (
    <main id="main-content">
      <H1>Resource Library</H1>
      <p>
        We share our curated research resources, including books, videos,
        courses, and more.
      </p>
      <p>All resources are reviewed by Intersectional Design Lab.</p>

      <div className="search-and-filter">
        <form onSubmit={handleApplyFilters}>
          <fieldset>
            <legend>Filter by type:</legend>
            <input
              type="checkbox"
              id="book"
              name="book"
              checked={selectedFilters.book}
              onChange={(event) =>
                handleCheckboxChange("book", event.target.checked)
              }
            />
            <label htmlFor="book">Book</label>
            <input
              type="checkbox"
              id="ebook"
              name="ebook"
              checked={selectedFilters.ebook}
              onChange={(event) =>
                handleCheckboxChange("ebook", event.target.checked)
              }
            />
            <label htmlFor="ebook">eBook</label>
            <input
              type="checkbox"
              id="video"
              name="video"
              checked={selectedFilters.video}
              onChange={(event) =>
                handleCheckboxChange("video", event.target.checked)
              }
            />
            <label htmlFor="video">Video</label>
            <input
              type="checkbox"
              id="article"
              name="article"
              checked={selectedFilters.article}
              onChange={(event) =>
                handleCheckboxChange("article", event.target.checked)
              }
            />
            <label htmlFor="article">Article</label>
            <input
              type="checkbox"
              id="internetSource"
              name="internetSource"
              checked={selectedFilters.internetSource}
              onChange={(event) =>
                handleCheckboxChange("internetSource", event.target.checked)
              }
            />
            <label htmlFor="internetSource">Internet Source</label>
          </fieldset>

          <button className="button" type="submit">
            Apply filters
          </button>

        </form>
      </div>

          <p>{filteredResources.length} resources found</p>

      {filteredResources.length > 0 ? (
        <ul className="resource-list">
          {filteredResources.map((resource, index) => {
            const id =
              resource.id ?? `${resource.title ?? "resource"}-${index}`;

            return (
              <li key={id}>
                <ResourceCard resource={resource} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No resources available yet.</p>
      )}
    </main>
  );
}
