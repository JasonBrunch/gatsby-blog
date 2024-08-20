import React from 'react';
import './button-white.css';


const ButtonWhite = ({ text, to, onClick }) => {
    return (
        <button className="button-white" onClick={onClick}>
            {text}
        </button>
    );
}

export default ButtonWhite;