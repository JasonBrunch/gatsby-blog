import React from "react";
import { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ButtonCircle from "../buttons/button-circle";
import DarkModeBtn from "../buttons/button-dark-mode";
import TreeSVG from "../../assets/tree.svg";

const DynamicPortrait = ({ image }) => {
  const [circleRadius, setCircleRadius] = useState(0);
  const [unscaledCircleRadius, setUnscaledCircleRadius] = useState(0);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [settingsAngle, setSettingsAngle] = useState(2.2); // Initial angle for settings button
  const [treeAngle, setTreeAngle] = useState(2.2); // Initial angle for tree button
  const [darkModeAngle, setDarkModeAngle] = useState(2.2);
  const [spiderAngle, setSpiderAngle] = useState(2.2);
  const [isAnimating, setIsAnimating] = useState(false);
  const [treeButtonPressed, setTreeButtonPressed] = useState(false); // State to track if the tree button is pressed
  const [treePosition, setTreePosition] = useState(null);
  const treeBtnAngleTarget = 1.9;
  const darkBtnAngleTarget = 1.6;
  const spiderBtnAngleTarget = 1.3;
  const firstTreeAngle = 4.69;

  useEffect(() => {
    // Calculate both the scaled and unscaled circle's radius and center based on the image size
    const calculateCircles = () => {
      const heroImage = document.querySelector(".hero-image .portrait");
      if (!heroImage) return;

      const rect = heroImage.getBoundingClientRect();

      // Unscaled circle (wraps around the image tightly)
      const mainRadius = rect.width / 2;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Scaled circle (for positioning the buttons)
      const scalingFactor = 1.15; // Increase circle size by 15%
      const buttonRadius = mainRadius * scalingFactor;

      setUnscaledCircleRadius(mainRadius);
      setCircleRadius(buttonRadius);
      setCenter({ x: centerX, y: centerY });
    };

    calculateCircles();
    window.addEventListener("resize", calculateCircles);

    return () => {
      window.removeEventListener("resize", calculateCircles);
    };
  }, []);

  // Function to calculate the position of a button along the circle
  const calculateButtonPosition = (radius, centerX, centerY, angle) => {
    const x = centerX + radius * Math.cos(angle) - 20; // Adjust by half button size (25px)
    const y = centerY + radius * Math.sin(angle) - 20;
    return { left: `${x}px`, top: `${y}px` };
  };

  // Animate the tree button from its current angle to a new one
  const animateTreeButton = (startAngle, endAngle) => {
    let currentAngle = startAngle;

    const animate = () => {
      if (currentAngle > endAngle) {
        currentAngle -= 0.02; // Adjust increment for faster or smoother animation
        setTreeAngle(currentAngle);
        requestAnimationFrame(animate);
      } else {
        setTreeAngle(endAngle); // Ensure it lands exactly on the target
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };
  const animateDarkButton = (startAngle, endAngle) => {
    let currentAngle = startAngle;

    const animate = () => {
      if (currentAngle > endAngle) {
        currentAngle -= 0.02; // Adjust increment for faster or smoother animation
        setDarkModeAngle(currentAngle);
        requestAnimationFrame(animate);
      } else {
        setDarkModeAngle(endAngle); // Ensure it lands exactly on the target
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };
  const animateSpiderButton = (startAngle, endAngle) => {
    let currentAngle = startAngle;

    const animate = () => {
      if (currentAngle > endAngle) {
        currentAngle -= 0.02; // Adjust increment for faster or smoother animation
        setSpiderAngle(currentAngle);
        requestAnimationFrame(animate);
      } else {
        setSpiderAngle(endAngle); // Ensure it lands exactly on the target
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  };

  // On settings button click, animate the tree button
  const SettingsBtnClick = () => {
    if (isAnimating) return; // Prevent multiple animations at the same time
    setIsAnimating(true);
    animateTreeButton(treeAngle, treeBtnAngleTarget);
    animateDarkButton(darkModeAngle, darkBtnAngleTarget);
    animateSpiderButton(spiderAngle, spiderBtnAngleTarget);
  };

  // Calculate the position of the tree along the unscaled circle
  const calculateTreePosition = (angle) => {
    const x = center.x + unscaledCircleRadius * Math.cos(angle) ;
    const y = center.y + unscaledCircleRadius * Math.sin(angle);
    return { x, y };
  };
  const TreeBtnClick = () => {
    console.log("Tree button clicked!");
    if (!treeButtonPressed) {
      const position = calculateTreePosition(firstTreeAngle);
      setTreePosition(position);
      setTreeButtonPressed(true); // Trigger the tree drawing
    } else {
      console.log("TREE ALREADY PRESSED");
    }
  };
  const SpiderBtnClick = () => {
    console.log("Spider button clicked!");
  };

  // Calculate button positions based on angles
  const settingsButtonStyle = calculateButtonPosition(
    circleRadius,
    center.x,
    center.y,
    settingsAngle
  );

  const treeButtonStyle = calculateButtonPosition(
    circleRadius,
    center.x,
    center.y,
    treeAngle
  );
  const darkButtonStyle = calculateButtonPosition(
    circleRadius,
    center.x,
    center.y,
    darkModeAngle
  );
  const spiderButtonStyle = calculateButtonPosition(
    circleRadius,
    center.x,
    center.y,
    spiderAngle
  );

  return (
    <div className="hero-image">
      <GatsbyImage image={image} alt="Me" className="portrait" />

      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Draw the circle */}
        <circle
          cx={center.x}
          cy={center.y}
          r={unscaledCircleRadius}
          stroke="black"
          strokeWidth="2"
          fill="none"
          style={{ pointerEvents: "none" }}
        />
        {/* Draw the visual markers */}
        
      </svg>

      {treeButtonPressed && treePosition && (
      <div
      style={{
        position: "absolute",
        left: treePosition.x,
        top: treePosition.y,
        width: '50px',  // Width of the SVG
        height: '50px', // Height of the SVG
        border: '1px solid red', // Border for visualization
        transform: 'translate(-50%, -100%)', // Adjust to place bottom middle of the SVG at the position
        transformOrigin: 'bottom center' // Ensure the transform is based on the bottom center of the div
      }}
    >
      <TreeSVG width="50" height="50" />
    </div>
    )}




      <ButtonCircle
        style={settingsButtonStyle}
        onClick={SettingsBtnClick}
        iconType="cog"
      />
      <ButtonCircle
        style={treeButtonStyle}
        onClick={TreeBtnClick}
        iconType="tree"
      />
      <DarkModeBtn style={darkButtonStyle} />
      <ButtonCircle
        style={spiderButtonStyle}
        onClick={SpiderBtnClick}
        iconType="spider"
      />
    </div>
  );
};

export default DynamicPortrait;
