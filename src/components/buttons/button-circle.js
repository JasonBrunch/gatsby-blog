import React from "react";
import "./button-circle.css";

const ButtonCircle = ({ style, onClick, iconType }) => {
  const iconStyleCog = { width: "78%", height: "78%", display: "block" }; 
  const iconStyleTree = { width: "70%", height: "70%", display: "block" }; 

  const renderIcon = () => {
    if (iconType === "cog") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1792 1792"
          style={iconStyleCog}
          fill="#ffffff"
        >
          <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28H785q-14 0-24.5-8.5T749 1634l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5V783q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5T465 263q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5T1043 158l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z" />
        </svg>
      );
    } else if(iconType === "tree"){
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 88.5 122.88"
          style={iconStyleTree}
          fill="#ffffff"
        >
          <g>
            <path d="M36.19,122.88V96.34H5.13c-5.2,0.48-6.26-3.63-4.03-7.04l19.84-23.26l-0.57-0.57H9.75c-3.85,0.57-5.27-3.6-2.94-6.53 l21.37-25.1h-6.24c-3.91,0.1-4.87-3.49-2.37-6.88L39.04,3.84C40.37,2.26,41.79-0.05,44.1,0c1.99,0.04,3.19,1.93,4.37,3.31 l20.7,24.14c2.25,3.22,0.33,6.61-3.59,6.61H60l21.22,24.87c2.55,2.52,1.25,6.55-1.68,7.11H67.21l18.5,21.7 c2.17,2.55,5.27,7.91-0.54,8.6H51.83v26.54H36.19L36.19,122.88z" />
          </g>
        </svg>
      );
    }
  };

  return (
    <button className="button-circle" style={style} onClick={onClick}>
      {renderIcon()}
    </button>
  );
};

export default ButtonCircle;
