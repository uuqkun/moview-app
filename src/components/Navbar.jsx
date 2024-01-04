import { Link } from "react-router-dom";

import { logo } from "../assets";
import { fetch } from "../services/fetch";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navlinks, setNavlinks] = useState();

  useEffect(() => {
    fetch().then((response) => {
      if (response.status === 200) {
        setNavlinks(response.data.data);
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="gray_100">
        <img src={logo} alt="Moview logo" className="logo" />
      </Link>

      <ul className="navbar__list">
        {navlinks &&
          navlinks.map((nl) => (
            <Link className="gray_100" key={nl.id} to={nl.url}>
              {nl.title}
            </Link>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
