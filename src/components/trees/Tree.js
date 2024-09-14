import React, { useEffect, useState } from "react";
import TreeSVG from "../../assets/tree.svg"; // Ensure you import the SVG

const Tree = ({ treePosition }) => {
  // Set the initial state for the animation and random size
  const [isGrowing, setIsGrowing] = useState(false);
  const [treeSize, setTreeSize] = useState(50); // Default size of 50px

  // Generate a random size for the tree between 40px and 60px when the component mounts
  useEffect(() => {
    const randomSize = Math.floor(Math.random() * 21) + 40; // Random size between 40 and 60
    setTreeSize(randomSize);
    setIsGrowing(true);
  }, []);

  // Guard clause to ensure treePosition is valid
  if (!treePosition) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: treePosition.x,
        top: treePosition.y,
        width: `${treeSize}px`,
        height: `${treeSize}px`,
        transform: `translate(-50%, -100%) rotate(${treePosition.rotationAngle}deg) scale(${isGrowing ? 1 : 0})`,
        transformOrigin: 'bottom center',
        transition: "transform 2s ease-in-out", // Smooth scaling
      }}
    >
      <TreeSVG width="100%" height="100%" />
    </div>
  );
};

export default Tree;