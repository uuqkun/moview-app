import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Moview logo" className="logo" />

      <ul className="navbar__list">
        <Link className="gray_100"  to="/">
          Movies
        </Link>
        <Link className="gray_100" to="/tv-shows">
          TV Shows
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
