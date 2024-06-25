import * as React from "react";
import MailSVG from "../../assets/mail.svg";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./navbar.css";


const Navbar = ({ data }) => {
  /* NAVBAR LOGIC */
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

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





  return (
    <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar">
        <div className="logo-container">
          <h3>JASON BUNCE</h3>
          <div className="circle"></div>
        </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          <h5>PORTFOLIO</h5>
        </Link>
        <Link to="/" className="nav-link">
          <h5>COMPONENTS</h5>
        </Link>
        <Link to="/journal" className="nav-link">
          <h5>JOURNAL</h5> 
        </Link>
      </div>

        <Link to="/contact-page" className="CTA">
          <MailSVG className="mail-svg" />
          <h5>GET IN TOUCH</h5>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;