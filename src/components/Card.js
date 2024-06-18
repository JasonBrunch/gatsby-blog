import React from "react";
import { Link } from "gatsby";

const Card = ({ title, description, path }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={path}>Read More</Link>
    </div>
  );
};

export default Card;