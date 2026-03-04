import { type FormEvent, useState } from "react";
import { H1 } from "../../components/header-and-footer/H1";
import { ResourceCard } from "../../components/resources/ResourceCard";
import resourcesData from "../../data/resources/resources.json";
import "./ResourceLibrary.css";

type Resource = {
  id?: string;
  title?: string;
  year?: number;
  format?: number | number[];
  category?: number | number[];
};

type FilterKey = "book" | "ebook" | "video" | "article" | "internetSource" | "intersectionality" | "raceEthnicityReligion" | "geographicalLocationMigrationStatus" | "ageDisabilityHealth" | "socioeconomicStatus" | "genderSex";

type FormatFilterKey =
  | "book"
  | "ebook"
  | "video"
  | "article"
  | "internetSource";

type CategoryFilterKey =
  | "intersectionality"
  | "raceEthnicityReligion"
  | "geographicalLocationMigrationStatus"
  | "ageDisabilityHealth"
  | "socioeconomicStatus"
  | "genderSex";

// Format filters map to values stored in resource.format.
const FORMAT_FILTER_KEYS: FormatFilterKey[] = [
  "book",
  "ebook",
  "video",
  "article",
  "internetSource",
];

// Category filters map to values stored in resource.category.
const CATEGORY_FILTER_KEYS: CategoryFilterKey[] = [
  "intersectionality",
  "raceEthnicityReligion",
  "geographicalLocationMigrationStatus",
  "ageDisabilityHealth",
  "socioeconomicStatus",
  "genderSex",
];

// Maps each checkbox key to the numeric value used in resources.json.
// Keys in FORMAT_FILTER_KEYS correspond to resource.format values.
// Keys in CATEGORY_FILTER_KEYS correspond to resource.category values.
const FILTER_TO_FORMAT: Record<FilterKey, number> = {
  book: 1,
  ebook: 2,
  video: 3,
  article: 4,
  internetSource: 5,
  intersectionality: 100,
  raceEthnicityReligion: 101,
  geographicalLocationMigrationStatus: 102,
  ageDisabilityHealth: 103,
  socioeconomicStatus: 104,
  genderSex: 105,
};

function sortByYearDescending(resources: Resource[]): Resource[] {
  return [...resources].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
}

export function ResourceLibrary() {
  // Normalize the imported JSON to always be an array.
  const allResources: Resource[] = sortByYearDescending(
    Array.isArray(resourcesData) ? resourcesData : [resourcesData],
  );

  // Tracks which checkboxes are currently selected.
  const [selectedFilters, setSelectedFilters] = useState<
    Record<FilterKey, boolean>
  >({
    book: false,
    ebook: false,
    video: false,
    article: false,
    internetSource: false,
    intersectionality: false,
    raceEthnicityReligion: false,
    geographicalLocationMigrationStatus: false,
    ageDisabilityHealth: false,
    socioeconomicStatus: false,
    genderSex: false,
  });

  // Resources currently shown in the UI (all by default).
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(allResources);

  const selectedFormatIds = FORMAT_FILTER_KEYS.filter(
    (filterKey) => selectedFilters[filterKey],
  ).map((filterKey) => FILTER_TO_FORMAT[filterKey]);

  const selectedCategoryIds = CATEGORY_FILTER_KEYS.filter(
    (filterKey) => selectedFilters[filterKey],
  ).map((filterKey) => FILTER_TO_FORMAT[filterKey]);

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
  function handleCheckboxChange(filter: FilterKey, isChecked: boolean) {
    setSelectedFilters((current) => ({ ...current, [filter]: isChecked }));
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
      <p>
        Last updated:{" "}
        {new Date("2026-03-04").toLocaleDateString([], {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div className="search-and-filter">
        <details>
          <summary>Filter resources</summary>
          <form onSubmit={handleApplyFilters}>
            <fieldset>
              <legend>Filter by format:</legend>
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

            <fieldset>
              <legend>Filter by category:</legend>
              <input
                type="checkbox"
                id="intersectionality"
                name="intersectionality"
                checked={selectedFilters.intersectionality}
                onChange={(event) =>
                  handleCheckboxChange("intersectionality", event.target.checked)
                }
              />
              <label htmlFor="intersectionality">Intersectionality</label>
              <input
                type="checkbox"
                id="race-ethnicity-religion"
                name="race-ethnicity-religion"
                checked={selectedFilters.raceEthnicityReligion}
                onChange={(event) =>
                  handleCheckboxChange(
                    "raceEthnicityReligion",
                    event.target.checked,
                  )
                }
              />
              <label htmlFor="race-ethnicity-religion">
                Race, Ethnicity, and Religion
              </label>
              <input
                type="checkbox"
                id="geographical-location-migration-status"
                name="geographical-location-migration-status"
                checked={selectedFilters.geographicalLocationMigrationStatus}
                onChange={(event) =>
                  handleCheckboxChange(
                    "geographicalLocationMigrationStatus",
                    event.target.checked,
                  )
                }
              />
              <label htmlFor="geographical-location-migration-status">
                Geographical Location and Migration Status
              </label>
              <input
                type="checkbox"
                id="age-disability-health"
                name="age-disability-health"
                checked={selectedFilters.ageDisabilityHealth}
                onChange={(event) =>
                  handleCheckboxChange("ageDisabilityHealth", event.target.checked)
                }
              />
              <label htmlFor="age-disability-health">
                Age, Disability, and Health
              </label>
              <input
                type="checkbox"
                id="socioeconomic-status"
                name="socioeconomic-status"
                checked={selectedFilters.socioeconomicStatus}
                onChange={(event) =>
                  handleCheckboxChange("socioeconomicStatus", event.target.checked)
                }
              />
              <label htmlFor="socioeconomic-status">Socioeconomic Status</label>
              <input
                type="checkbox"
                id="gender-sex"
                name="gender-sex"
                checked={selectedFilters.genderSex}
                onChange={(event) =>
                  handleCheckboxChange("genderSex", event.target.checked)
                }
              />
              <label htmlFor="gender-sex">Gender and Sex</label>
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
