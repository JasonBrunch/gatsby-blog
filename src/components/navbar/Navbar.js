import * as React from "react";
import Hamburger from "../../assets/Hamburger_icon.svg";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";
import ButtonGlow from "../buttons/button-glow";


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
    <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar">
        <div className="logo-container">
          <h6>JASON BUNCE</h6>
          <div className="circle"></div>
        </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          <h6>PORTFOLIO</h6>
        </Link>
        <Link to="/component-library" className="nav-link">
          <h6>COMPONENTS</h6>
        </Link>
        <Link to="/journal" className="nav-link">
          <h6>JOURNAL</h6> 
        </Link>
        <Link to="/style-page" className="nav-link">
          <h6>STYLES</h6> 
        </Link>
      </div>
      
      <ButtonGlow text="GET IN TOUCH" onClick="/contact-page" className="contact-button" />
      <button id="hamburger-menu" onClick= {toggleHamburgerMenu} aria-label="Open Menu"><Hamburger/></button>
   
      </div>
    </div>
  );
};

export default Navbar;