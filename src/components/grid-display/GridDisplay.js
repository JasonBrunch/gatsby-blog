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
      wizardHunterImage: file(relativePath: { eq: "wizard-hunter.png"}) {
        childImageSharp{
          gatsbyImageData(width: 1920, quality: 100, layout: CONSTRAINED)
        }
      }
      creeklifeImage: file(relativePath: {eq: "creek-life.png"}) {
        childImageSharp{
          gatsbyImageData(width: 1920, quality: 100, layout: CONSTRAINED)
        }
      }
      dayforgeImage: file(relativePath: {eq: "dayforge.png"}) {
        childImageSharp{
          gatsbyImageData(width: 1920, quality: 100, layout: CONSTRAINED)
        }
      }
       burgerCoImage: file(relativePath: {eq: "burgerco.png"}) {
        childImageSharp{
          gatsbyImageData(width: 1920, quality: 100, layout: CONSTRAINED)
        }
      } 
    }
  `);

  // Get the image data using getImage helper function
  const componentImage = getImage(data.componentLibraryImage);
  const wizardImage = getImage(data.wizardHunterImage);
  const creeklifeImage = getImage(data.creeklifeImage);
  const dayforgeImage = getImage(data.dayforgeImage);
  const burgerCoImage = getImage(data.burgerCoImage);

  return (
    <section className="grid-display-main-container">
      <div className="grid-item medium-grid-item">Project 1</div>
      <div className="grid-item tall-grid-item"><GatsbyImage image={creeklifeImage} alt="Creek Life"/></div>
      <div className="grid-item medium-grid-item"><GatsbyImage image={componentImage} alt="Component Library" /></div>
      <div className="grid-item medium-grid-item"><GatsbyImage image={wizardImage} alt="Wizard Hunter" /></div>
      <div className="grid-item medium-grid-item"><GatsbyImage image={dayforgeImage} alt="Dayforge" /></div>
      <div className="grid-item tall-grid-item"><GatsbyImage image={burgerCoImage} alt="Burger Restaurant" /></div>
    </section>
  );
};

export default GridDisplay;