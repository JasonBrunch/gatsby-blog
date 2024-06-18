
import React from "react"
import "./layout.css"
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/zcl7ttz.css" />
    </Helmet>

    {children}
  </div>
);

export default Layout;