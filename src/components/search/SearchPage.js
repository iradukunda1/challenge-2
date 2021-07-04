import React, { useState } from "react";
import "./search-page.css";

function SearchPage(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if(text && text.length > 0){
      setIsEnabled(true)
    }
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (!searchText.trim()) {
        setIsEnabled(false)
      } else {
        onSearch(searchText);
      }
    }
  };
  return (
    <div className="search-page">
      <h2 className="title is-2 has-text-centered">Album Search List By Id</h2>
      <div className="search-bar">
        <input
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          className="search-input"
          value={searchText}
          type="number"
          placeholder="Please enter album-id to search your album"
        />
        <button
          className="search-btn"
          onClick={handleEnterKeyPressed}
          disabled={!isEnabled}
        >
          Get Album Photos By Id
        </button>
      </div>
    </div>
  );
}
export default SearchPage;
