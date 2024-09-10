import React from "react";
import { useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ButtonCircle from "../buttons/button-circle";
import DarkModeBtn from "../buttons/button-dark-mode";

const DynamicPortrait = ({ image }) => {
  // Get the image data using getImage helper function

  const [circleRadius, setCircleRadius] = useState(0);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [settingsAngle, setSettingsAngle] = useState(2.2); // Initial angle for settings button
  const [treeAngle, setTreeAngle] = useState(2.2); // Initial angle for tree button
  const [darkModeAngle, setDarkModeAngle] = useState(2.2);
  const [spiderAngle, setSpiderAngle] = useState(2.2);
  const [isAnimating, setIsAnimating] = useState(false);
  const treeBtnAngleTarget = 1.9;
  const darkBtnAngleTarget = 1.6;
  const spiderBtnAngleTarget = 1.3;

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

  const TreeBtnClick = () => {
    console.log("Tree button clicked!");
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
    <div className="hero-image  ">
      <GatsbyImage image={image} alt="Me" className="portrait " />

      {/* Visualize the circle using SVG 
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
      */}
      
      {/* Place the ButtonCircle */}
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
