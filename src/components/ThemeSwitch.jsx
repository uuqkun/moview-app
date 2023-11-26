import React from "react";
import { useThemeUpdate } from "../utils/ThemeContext";

const ThemeSwitch = () => {
  const toggle = useThemeUpdate();
  return (
    <div>
      <button type="button" onClick={toggle}>
        change
      </button>
    </div>
  );
};

export default ThemeSwitch;
