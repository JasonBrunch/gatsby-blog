
import React, {useEffect, useRef} from "react"
import "./layout.css"
import { Helmet } from "react-helmet";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const Layout = ({ children }) => (
  <div>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/zcl7ttz.css" />
    </Helmet>

    {children}
  </div>
);

export default Layout;