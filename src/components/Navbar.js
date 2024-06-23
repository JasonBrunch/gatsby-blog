import * as React from "react";


import MailSVG from "../assets/mail.svg";
import { useEffect, useState } from "react";

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
          <button className="CTA">
            <MailSVG className="mail-svg" />
            <h5>GET IN TOUCH</h5>
          </button>
        </div>
      </div>
  );
};

export default Navbar;