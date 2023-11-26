import React from "react";
import { Link } from "react-router-dom";

import Style from "../App.module.css";
import { useTheme } from "../utils/ThemeContext";

const Navbar = () => {
  const darkTheme = useTheme();
  return (
    <div className={darkTheme ? Style.darkTheme : Style.whiteTheme}>
      <br />
      <Link to="/">Dashboard</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
