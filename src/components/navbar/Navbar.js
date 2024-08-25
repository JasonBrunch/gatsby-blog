import * as React from "react";
import Hamburger from "../../assets/Hamburger_icon.svg";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import ButtonGlow from "../buttons/button-glow";
import DarkModeButton from "../buttons/button-dark-mode";
import Logo from "../logo/Logo.js";

const Navbar = ({ data }) => {
  /* NAVBAR LOGIC */
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 200) {
        setNavbarVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setNavbarVisible(false);
        } else {
          setNavbarVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleHamburgerMenu = () => {
    setHamburgerVisible(!hamburgerVisible);
  };

  return (
    <div className={`navbar-container ${navbarVisible ? "visible" : "hidden"} `}>
      <div className="navbar">
        <Logo />

        <div className="nav-links">
          <Link to="/" className="nav-link">
            <h6 className="smaller-text">PORTFOLIO</h6>
          </Link>
         
          <Link to="/journal" className="nav-link">
            <h6 className="smaller-text">JOURNAL</h6>
          </Link>
       
        </div>
        <div className="navbar-r-container">
          <DarkModeButton />
          <ButtonGlow
            text="GET IN TOUCH"
            onClick="/contact-page"
            className="contact-button"
          />
        </div>
        <button
          id="hamburger-menu"
          onClick={toggleHamburgerMenu}
          aria-label="Open Menu"
        >
          <Hamburger />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
