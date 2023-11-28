import React from "react";
import { searchIcon } from "../assets";

const Searchbar = ({ onChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Search Movies or TV Shows"
        onChange={onChange}
      />
      <img src={searchIcon} alt="search icon" />
    </div>
  );
};

export default Searchbar;
