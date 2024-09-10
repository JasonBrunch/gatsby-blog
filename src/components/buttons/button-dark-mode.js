import React from "react";
import { useContext, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import SunshineSVG from "../../assets/sunshine.svg";
import "./button-dark-mode.css";

const DarkModeButton = ({ style }) => { // Destructure 'style' properly
  const { toggleTheme } = useContext(ThemeContext);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {  
    setIsAnimating(!isAnimating);
    toggleTheme();
  };

  return (
    <button className="toggle-theme-button" style={style} onClick={handleClick}>
      <div className={`sushine-container ${isAnimating ? "animate-rays" : ""}`}>
        <SunshineSVG className="sunshine-svg" />
      </div>
    </button>
  );
};

export default DarkModeButton;
