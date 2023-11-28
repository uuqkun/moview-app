import { Link } from "react-router-dom";

import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="gray_100">
        <img src={logo} alt="Moview logo" className="logo" />
      </Link>

      <ul className="navbar__list">
        <Link className="gray_100" to="/movies">
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
