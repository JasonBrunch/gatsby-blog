import "./grid-display.css";
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
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
      electionQuizImage: file(relativePath: {eq: "election-quiz.png"}) {
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
  const electionQuizImage = getImage(data.electionQuizImage);
  const dayforgeImage = getImage(data.dayforgeImage);
  const burgerCoImage = getImage(data.burgerCoImage);

  return (
    <section className="grid-display-section ">
      <div className="recent-projects-container ">
        <h1 className="">RECENT PROJECTS</h1>
        <div className="grid-display-main-container">
          <Link to="/projects/project1" className="grid-item medium-grid-item">
            <GatsbyImage image={burgerCoImage} alt="Burger Restaurant" />
          </Link>
          <Link to="/projects/project2" className="grid-item medium-grid-item">
            <GatsbyImage image={wizardImage} alt="Wizard Hunter" />
          </Link>
          <Link to="/projects/project3" className="grid-item medium-grid-item">
            <GatsbyImage image={dayforgeImage} alt="Dayforge" />
          </Link>
          <Link to="/projects/project4" className="grid-item medium-grid-item">
            <GatsbyImage image={electionQuizImage} alt="Election Quiz" />
          </Link>
          <Link to="/projects/project1" className="grid-item medium-grid-item">
            <GatsbyImage image={componentImage} alt="Component Library" />
          </Link>
          <div className="grid-item medium-grid-item">Project 6</div>
        </div>
      </div>
    </section>
  );
};

export default GridDisplay;