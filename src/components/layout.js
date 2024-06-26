
import React from "react"

import "../styles/global.css"
import { Helmet } from "react-helmet";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";





const Layout = ({ children }) => (
  <div className="layout-main-container">
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/zcl7ttz.css" />
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;