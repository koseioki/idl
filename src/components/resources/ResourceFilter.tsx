import React, { type FormEvent } from "react";
import './ResourceFilter.css';
type Option = { id: number; label: string };

export function ResourceFilter({
  formatOptions,
  categoryOptions,
  selectedFormatFilters,
  selectedFilters,
  onFormatChange,
  onCategoryChange,
  matchingResourcesCount,
  onApply,
}: {
  formatOptions: Option[];
  categoryOptions: Option[];
  selectedFormatFilters: Record<string, boolean>;
  selectedFilters: Record<string, boolean>;
  onFormatChange: (id: number, isChecked: boolean) => void;
  onCategoryChange: (id: string, isChecked: boolean) => void;
  matchingResourcesCount: number;
  onApply: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="resource-filter">
    <details>
      <summary>
        <span aria-hidden="true"></span>Filter resources
      </summary>
      <form onSubmit={onApply}>
        <fieldset>
          <legend>Filter by format:</legend>
          {formatOptions.map((opt) => (
            <div className="format-option" key={`fmt-${opt.id}`}>
              <input
                type="checkbox"
                id={`format-${opt.id}`}
                name={`format-${opt.id}`}
                checked={!!selectedFormatFilters[String(opt.id)]}
                onChange={(e) => onFormatChange(opt.id, e.target.checked)}
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
                onChange={(e) => onCategoryChange(String(opt.id), e.target.checked)}
              />
              <label htmlFor={`category-${opt.id}`}>{opt.label}</label>
            </div>
          ))}
        </fieldset>

        <button className="button" type="submit">
          See {matchingResourcesCount} result{matchingResourcesCount === 1 ? "" : "s"}
        </button>
      </form>
    </details>
    </div>
  );
}
