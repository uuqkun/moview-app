import { Link } from "react-router-dom";

import styles from "../styles/global.module.css";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Moview logo" className={styles.logo} />

      <ul className={styles.navbar__list}>
        <Link className={styles.gray_100}  to="/">
          Movies
        </Link>
        <Link className={styles.gray_100} to="/tv-shows">
          TV Shows
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
