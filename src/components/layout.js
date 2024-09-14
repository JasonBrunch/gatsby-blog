import React from "react";

import "../styles/global.css";
import { Helmet } from "react-helmet";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


import { ThemeProvider } from "../context/ThemeContext";

const Layout = ({ children }) => (
  <ThemeProvider>
    <div className="layout-main-container">
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/zcl7ttz.css" />
      </Helmet>
      {/* Add overlay here */}
   
      <Navbar />
      {children}
      <Footer />
    </div>
  </ThemeProvider>
);

export default Layout;
