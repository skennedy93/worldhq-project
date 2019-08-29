import React from "react";
import search from "../../assets/icons/search.svg"


const SearchBar = () => {
  return (
    <section className ="searchbar">
        <p className = "search-text">
            Search
        </p>
        <data>
            <img className = "pointer" src={search} alt="search icon" />
        </data>
    </section>
  );
};

export default SearchBar;