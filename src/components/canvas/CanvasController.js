import React, { useRef, useEffect, useState } from 'react';
import { ReactComponent as TreeSVG } from '../../assets/tree.svg'; // Adjust path as necessary

const CanvasController = ({ circleRadius, center, treeButtonPressed }) => {
  const canvasRef = useRef(null);
  const [treeImageSrc, setTreeImageSrc] = useState(null);

  // Set image src from file
  useEffect(() => {
    // Convert SVG component to a URL
    const svgUrl = URL.createObjectURL(new Blob([TreeSVG], { type: 'image/svg+xml' }));
    setTreeImageSrc(svgUrl);
  }, []);

  // Draw the circle and tree (if button pressed)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawCircle = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before each draw
      ctx.beginPath();
      ctx.arc(center.x, center.y, circleRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    };

    const drawTree = () => {
      if (!treeImageSrc) return; // Ensure the image source is valid

      const treeImage = new Image();
      treeImage.src = treeImageSrc; // Use the SVG URL as the source

      treeImage.onload = () => {
        const treeX = center.x;
        const treeY = center.y - circleRadius;
        const treeHeight = 60;
        const treeWidth = 40;
        ctx.drawImage(treeImage, treeX - treeWidth / 2, treeY - treeHeight, treeWidth, treeHeight);
      };

      treeImage.onerror = (error) => {
        console.error("Error loading the tree image:", error);
      };
    };

    // Always draw the circle
    drawCircle();

    // Draw the tree if the button is pressed and the image has loaded
    if (treeButtonPressed && treeImageSrc) {
      console.log("Tree button clicked!");
      drawTree();
    }
  }, [circleRadius, center, treeButtonPressed, treeImageSrc]);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none', // Ensures the canvas doesn't interfere with user interaction
        }}
      />
    </>
  );
};

export default CanvasController;