import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="searchbar">
      <FiSearch className="searchbar-icon" />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="searchbar-input"
      />
    </div>
  );
}