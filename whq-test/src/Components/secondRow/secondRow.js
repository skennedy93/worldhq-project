import React from "react";
import SearchBar from '../Search/searchBar'
import Customize from '../Search/customize'

const SecondRow = () => {
  return (
    <section className ="second-line">
        <div class = "options">
            <SearchBar/>
            <Customize/>
        </div>
    </section>
  );
};

export default SecondRow;