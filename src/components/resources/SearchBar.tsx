import { type FormEvent } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
};

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(value.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="resource-search">Search resources</label>
      </div>
      <div className="search-input-and-button">
        <input
          id="resource-search"
          type="search"
          placeholder="Search by title, author, or keyword"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        <button className="button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
