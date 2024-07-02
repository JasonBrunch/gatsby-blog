import "./grid-display.css";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const GridDisplay = () => {
  // GraphQL query to get the image
  const data = useStaticQuery(graphql`
    query {
      componentLibraryImage: file(relativePath: { eq: "component-library.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1920, quality: 100, layout: CONSTRAINED)
        }
      }
    }
  `);

  // Get the image data using getImage helper function
  const image = getImage(data.componentLibraryImage);

  return (
    <section className="grid-display-main-container">
      <div className="grid-item">
        <GatsbyImage image={image} alt="Component Library" />
      </div>
      <div className="grid-item">Project 2</div>
      <div className="grid-item">Project 3</div>
      <div className="grid-item">Project 4</div>
      <div className="grid-item">Project 5</div>
      <div className="grid-item">Project 6</div>
    </section>
  );
};

export default GridDisplay;