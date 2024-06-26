import React from "react";
import { Link } from "gatsby";
import MailSVG from "../../assets/mail.svg";

import "./button-glow.css";

const ButtonGlow = ({ text, onClick }) => {
    return (
        <Link to={onClick} className="CTA">
            <MailSVG className="mail-svg" />
            <h5>{text}</h5>
        </Link>
    );
};

export default ButtonGlow;