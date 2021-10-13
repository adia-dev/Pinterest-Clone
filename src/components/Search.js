import React from "react";

import Unsplash from "../utils/Unsplash";
import { FaSearch, FaChevronDown } from "react-icons/fa";

function Search({ setPins }) {
  const onSearchBarKeyDown = (e) => {
    if (e.key == "Enter" && e.target.value.length > 0) {
      search(e.target.value).then((response) => {
        const pins = response.map((r, i) => ({
          id: i,
          name: r.description,
          imageURL: r.urls.regular,
        }));
        setPins(pins);
      });
    }
  };

  async function search(query) {
    const request = await fetch(Unsplash.baseURL + query);

    if (request.ok) {
      const result = await request.json();
      return result.results;
    }
    return false;
  }

  const onSearchBarFocus = () => {
    console.log("Search Bar");
  };

  return (
    <div className="search-container">
      <FaSearch
        className="search-container__search__icon"
        size={16}
        color="#767676"
      />
      <input
        type="text"
        onFocus={onSearchBarFocus}
        placeholder="Rechercher"
        onKeyDown={onSearchBarKeyDown}
      />
    </div>
  );
}

export default Search;
