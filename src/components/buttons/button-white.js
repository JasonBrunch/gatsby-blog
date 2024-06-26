import React from 'react';
import './button-white.css';
import { Link } from 'gatsby';

const ButtonWhite = ({ text, onClick }) => {
    return (
        <Link to={onClick} className="button-white">
            {text}
        </Link>
    );
}

export default ButtonWhite;