import React from "react";
import TreeSVG from "../../assets/tree.svg"; // Ensure you import the SVG

const Tree = ({ treePosition }) => {
  // Guard clause to ensure treePosition is valid
  if (!treePosition) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: treePosition.x,
        top: treePosition.y,
        width: '50px',
        height: '50px',
       
        transform: `translate(-50%, -100%) rotate(${treePosition.rotationAngle}deg)`, 
        transformOrigin: 'bottom center',
      }}
    >
      <TreeSVG width="50" height="50" />
    </div>
  );
};

export default Tree;