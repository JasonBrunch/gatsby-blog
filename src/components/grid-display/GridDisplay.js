import "./grid-display.css";
import React from "react";

const GridDisplay = () => {
  return (
    <section className="grid-display-main-container">
      <div className="grid-item tall">Project 1</div>
      <div className="grid-item short">Project 2</div>
      <div className="grid-item short">Project 3</div>
      <div className="grid-item tall">Project 4</div>
      <div className="grid-item short">Project 5</div>
      <div className="grid-item short">Project 6</div>
      <div className="grid-item tall">Project 7</div>
      <div className="grid-item short">Project 8</div>
      <div className="grid-item short">Project 9</div>
    </section>
  );
};

export default GridDisplay;