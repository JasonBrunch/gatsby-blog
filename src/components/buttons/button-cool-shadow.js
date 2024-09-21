import React from "react";
import './button-cool-shadow.css';

const colorOptions = {
    red: "rgb(255 70 84/1)",
    blue: "rgb(70 130 255/1)",
    green: "rgb(70 255 84/1)",
    white: "rgb(255, 255, 255/1)",  
    transparent: "transparent", 
};

const ButtonCoolShadow = ({ title, color, onClick }) => {
    const styles = {
        backgroundColor: colorOptions[color] || colorOptions.red
    };

    // Add a console log to check if `onClick` is defined
    console.log("onClick prop in ButtonCoolShadow:", onClick);

    return (
        <button 
            className="button-50" 
            onClick={onClick}
            style={styles}>
            {title ? title : "Button 50"}
        </button>
    );
};

export default ButtonCoolShadow;

