import React from "react";
import { searchIcon } from "../assets";

const Searchbar = () => {
  return (
    <div>
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Search Movies or TV Shows"
      />
      ;
    </div>
  );
};

export default Searchbar;
