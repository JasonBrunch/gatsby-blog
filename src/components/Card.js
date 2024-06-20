import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";


const Card = ({ title, description, path, image }) => {
  const imageData = getImage(image);
  return (
    <div className= "card-container">
        {imageData && 
        <GatsbyImage 
        image={imageData} 
        alt={title}
        className="card-image" 
        />}
      <h3>{title}</h3>
    
   

    </div>
  );
};

export default Card;