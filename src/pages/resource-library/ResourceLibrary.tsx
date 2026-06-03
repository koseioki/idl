import { type FormEvent, useState } from "react";
import { H1 } from "../../components/header-and-footer/H1";
import { ResourceCard } from "../../components/resources/ResourceCard";
import resourcesData from "../../data/resources/resources.json";
import "./ResourceLibrary.css";
import resourceFormatData from "../../data/resources/resource-format.json";
import resourceCategoryData from "../../data/resources/resource-category.json";


type Resource = {
  id?: string;
  title?: string;
  year?: number;
  format?: number | number[];
  category?: number | number[];
};

// category options are loaded from resource-category.json (id -> label)

// Sorting resources
// !! it's actually ascending here
function sortByYearDescending(resources: Resource[]): Resource[] {
  return [...resources].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export function ResourceLibrary() {
  // Normalize the imported JSON to always be an array.
  const allResources: Resource[] = sortByYearDescending(
    Array.isArray(resourcesData) ? resourcesData : [resourcesData],
  );

  // Tracks which checkboxes are currently selected.
  // Build format options from imported JSON (id -> label).
  const formatOptions = Object.entries(resourceFormatData).map(
    ([id, label]) => ({ id: Number(id), label }),
  );

  // Build category options from imported JSON (id -> label).
  const categoryOptions = Object.entries(resourceCategoryData).map(
    ([id, label]) => ({ id: Number(id), label }),
  );

  // Tracks which category checkboxes are currently selected (keys are string ids).
  const [selectedFilters, setSelectedFilters] = useState<Record<string, boolean>>(
    () => Object.fromEntries(categoryOptions.map((o) => [String(o.id), false])),
  );

  // Tracks which format IDs are selected (keys are stringified ids).
  const [selectedFormatFilters, setSelectedFormatFilters] = useState<
    Record<string, boolean>
  >(() => Object.fromEntries(formatOptions.map((o) => [String(o.id), false])));

  // Resources currently shown in the UI (all by default).
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(allResources);

  const selectedFormatIds = Object.entries(selectedFormatFilters)
    .filter(([, v]) => v)
    .map(([id]) => Number(id));

  const selectedCategoryIds = Object.entries(selectedFilters)
    .filter(([, v]) => v)
    .map(([id]) => Number(id));

  // A resource is included when it matches at least one selected format
  // (if any format is selected) and at least one selected category
  // (if any category is selected).
  function doesResourceMatchSelectedFilters(resource: Resource): boolean {
    const formatValues = Array.isArray(resource.format)
      ? resource.format
      : [resource.format ?? 0];
    const categoryValues = Array.isArray(resource.category)
      ? resource.category
      : [resource.category ?? 0];

    const matchesFormat =
      selectedFormatIds.length === 0 ||
      formatValues.some((formatValue) => selectedFormatIds.includes(formatValue));

    const matchesCategory =
      selectedCategoryIds.length === 0 ||
      categoryValues.some((categoryValue) =>
        selectedCategoryIds.includes(categoryValue),
      );

    return matchesFormat && matchesCategory;
  }

  const matchingResourcesCount =
    selectedFormatIds.length === 0 && selectedCategoryIds.length === 0
      ? allResources.length
      : allResources.filter(doesResourceMatchSelectedFilters).length;

  // Updates a single checkbox value while preserving the others.
  function handleCheckboxChange(filterId: string, isChecked: boolean) {
    setSelectedFilters((current) => ({ ...current, [filterId]: isChecked }));
  }

  function handleFormatCheckboxChange(id: number, isChecked: boolean) {
    setSelectedFormatFilters((current) => ({ ...current, [String(id)]: isChecked }));
  }

  // Applies filters on form submit and prevents a full page reload.
  function handleApplyFilters(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // If nothing is selected, show every resource.
    if (selectedFormatIds.length === 0 && selectedCategoryIds.length === 0) {
      setFilteredResources(allResources);
      return;
    }

    // Keep resources that match selected format and category filters.
    const nextResources = allResources.filter(doesResourceMatchSelectedFilters);

    setFilteredResources(sortByYearDescending(nextResources));
    // set the focus on the "** resources found" text
    const resultsText = document.getElementById("results-text");
    resultsText?.focus();
  }

  return (
    <main id="main-content">
      <H1>Resource Library</H1>
      <p>
        We share our curated research resources, including books, videos,
        courses, and more. All resources are reviewed by Intersectional Design
        Lab.
      </p>
      {/* <p>
        Last updated:{" "}
        {new Date("2026-03-04").toLocaleDateString([], {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p> */}

      <div className="search-and-filter">
        <details>
          <summary><span aria-hidden="true"></span>Filter resources</summary>
          <form onSubmit={handleApplyFilters}>
            <fieldset>
              <legend>Filter by format:</legend>
              {formatOptions.map((opt) => (
                <div className="format-option" key={`fmt-${opt.id}`}>
                  <input
                    type="checkbox"
                    id={`format-${opt.id}`}
                    name={`format-${opt.id}`}
                    checked={!!selectedFormatFilters[String(opt.id)]}
                    onChange={(e) => handleFormatCheckboxChange(opt.id, e.target.checked)}
                  />
                  <label htmlFor={`format-${opt.id}`}>{opt.label}</label>
                </div>
              ))}
            </fieldset>

            <fieldset>
              <legend>Filter by category:</legend>
              {categoryOptions.map((opt) => (
                <div className="category-option" key={`cat-${opt.id}`}>
                  <input
                    type="checkbox"
                    id={`category-${opt.id}`}
                    name={`category-${opt.id}`}
                    checked={!!selectedFilters[String(opt.id)]}
                    onChange={(e) => handleCheckboxChange(String(opt.id), e.target.checked)}
                  />
                  <label htmlFor={`category-${opt.id}`}>{opt.label}</label>
                </div>
              ))}
            </fieldset>

            <button className="button" type="submit">
              {/* Apply filters */}
              See {matchingResourcesCount} result
              {matchingResourcesCount === 1 ? "" : "s"}
            </button>
          </form>
        </details>
      </div>

      <p tabIndex={-1} id="results-text">
        {filteredResources.length} resources found
      </p>

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
