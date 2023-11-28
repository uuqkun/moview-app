import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer__logo">
        <img src={logo} alt="moview logo" className="logo" />
        <h5 className="body-large gray_50">Moview</h5>
      </Link>

      <p className="body-large gray_100">
        Made with <span>🔥</span> by Uqie
      </p>
    </footer>
  );
};

export default Footer;
