import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./card2.css";


const Card2 = ({ title, description, path, image }) => {
  const imageData = getImage(image);
  return (
    <div className="card2-container">
      <Link to={path} className="card2-link ">
        {imageData && (
          <GatsbyImage
            image={imageData}
            alt={title}
            className="card-image"
          />
        )}
        <h5>{title}</h5>
        <p>{description}</p>

      </Link>
    </div>
  );
};

export default Card2;