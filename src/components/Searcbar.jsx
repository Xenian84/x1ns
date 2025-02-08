import SearchSvg from "../assets/svg/ButtonSvg";

const SearchBar = ({
  className,
  value,
  onChange,
  placeholder,
  onSearch,
  white,
  ...props
}) => {
  // Container classes mimic your Button component styling
  const containerClasses = `search-bar relative inline-flex items-center h-11 transition-colors hover:text-color-1 ${
    className || ""
  }`;
  
  // Input styling: adjust text color based on "white" prop
  const inputClasses = `w-full h-full pl-5 pr-12 bg-transparent focus:outline-none ${
    white ? "text-n-8" : "text-n-1"
  }`;

  // Trigger search when the user presses the "Enter" key
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(e.target.value);
    }
  };

  // Trigger search when the search button is clicked
  const handleClick = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={containerClasses} {...props}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "Search..."}
        className={inputClasses}
      />
      <button
        type="button"
        onClick={handleClick}
        className="absolute right-0 p-3"
      >
        {SearchSvg(white)}
      </button>
    </div>
  );
};

export default SearchBar;