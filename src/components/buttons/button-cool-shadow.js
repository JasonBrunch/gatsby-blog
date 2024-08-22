import React from "react";
import './button-cool-shadow.css';

const ButtonCoolShadow = ({title}) => {
    return (
        <button className="button-50">{title ? title : "Button 50"}</button>
    );
};

export default ButtonCoolShadow

