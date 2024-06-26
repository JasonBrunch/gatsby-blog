import React from "react";
import { Link } from "gatsby";
import MailSVG from "../../assets/mail.svg";

import "./button-glow.css";

const ButtonGlow = ({ text, onClick }) => {
    return (
        <Link to={onClick} className="CTA">
            <MailSVG className="mail-svg" />
            {text}
        </Link>
    );
};

export default ButtonGlow;