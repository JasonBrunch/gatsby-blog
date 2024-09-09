import React from "react";
import { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ButtonCircle from "../buttons/button-circle";


const DynamicPortrait = ({image}) => {
  // Get the image data using getImage helper function

  const [circleRadius, setCircleRadius] = useState(0);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(2.2); // Angle in radians

  useEffect(() => {
    // Calculate the circle's radius and center based on the image size
    const calculateCircle = () => {
      const heroImage = document.querySelector(".hero-image .portrait");
      if (!heroImage) return;

      const rect = heroImage.getBoundingClientRect();
      const scalingFactor = 1.15; // Increase circle size by 15%
      const radius = (rect.width / 2) * scalingFactor;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setCircleRadius(radius);
      setCenter({ x: centerX, y: centerY });
    };

    calculateCircle();
    window.addEventListener("resize", calculateCircle);

    return () => {
      window.removeEventListener("resize", calculateCircle);
    };
  }, []);

  // Function to calculate the position of the button along the circle
  const calculateButtonPosition = (radius, centerX, centerY, angle) => {
    const x = centerX + radius * Math.cos(angle) - 20; // Adjust by half button size (25px)
    const y = centerY + radius * Math.sin(angle) - 20;
    return { left: `${x}px`, top: `${y}px` };
  };

  // Calculate button position based on current angle
  const buttonStyle = calculateButtonPosition(
    circleRadius,
    center.x,
    center.y,
    angle
  );

  const SettingsBtnClick = () => {
    console.log("CLICK CLICK");
  };

  return (
    <div className="hero-image  ">
      <GatsbyImage image={image} alt="Me" className="portrait " />

      {/* Visualize the circle using SVG */}
      <svg
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        width="100%"
        height="100%"
      >
        <circle
          cx={center.x}
          cy={center.y}
          r={circleRadius}
          stroke="red"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Place the ButtonCircle */}
      <ButtonCircle style={buttonStyle} onClick={SettingsBtnClick}  />
    </div>
  );
};

export default DynamicPortrait;
