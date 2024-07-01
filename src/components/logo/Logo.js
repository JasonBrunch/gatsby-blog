import React, { useRef, useEffect, useState } from "react";
import "./logo.css";

const Logo = () => {
  const textRef = useRef(null);
  const fullText = "JASON  BUNCE";
  const [displayedText, setDisplayedText] = useState("");
  const [circlePosition, setCirclePosition] = useState(30); // Start the circle at a position slightly right

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < fullText.length) {
          const nextChar = fullText[index];
          const increment = nextChar === " " ? 8 : 16; // Use a smaller increment for spaces
          setCirclePosition((prev) => prev + increment); // Adjust the increment to match the character width
          index++;
          return prev + nextChar;
        } else {
          clearInterval(typingInterval);
          return prev;
        }
      });
    }, 200); // Adjust the speed of typing here (milliseconds)

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent = displayedText.replace(/ /g, "\u00A0"); // Replace spaces with non-breaking spaces
    }
  }, [displayedText]);

  return (
    <div className="LogoSVG-Container">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 300 50"
      >
        <text x="10" y="35" className="text" ref={textRef}>{displayedText}</text>
        <circle id="Circle" className="circle-1" cx={circlePosition} cy="26" r="12.5" />
      </svg>
    </div>
  );
};

export default Logo;