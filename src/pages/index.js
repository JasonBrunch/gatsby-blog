import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import GridDisplay from "../components/grid-display/GridDisplay";
import "../styles/portfolio.css";
import Pointer from "../components/pointer/Pointer";
import NextIcon from "../assets/nextjs-icon.svg";
import NodeIcon from "../assets/node-icon.svg";
import WordpressIcon from "../assets/wordpress-icon.svg";
import ButtonCoolShadow from "../components/buttons/button-cool-shadow";
import FullContactForm from "../components/contact/FullContactForm.js";

const Home = ({ data }) => {
  // Get the image data using getImage helper function
  const portrait = getImage(data.image1.childImageSharp.gatsbyImageData);
  const coding = getImage(data.image2.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className="home-main-container">
        <section className="home-hero-main-container ">
          <div className="hero-secondary-containter debug2">
            <div className="hero-image  ">
              <GatsbyImage image={portrait} alt="Me" className="portrait" />
            </div>
            <div className="hero-text ">
              <h4>Web Developer</h4>
              <h2 className="">JASON BUNCE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida lorem quis quam tristique euismod.{" "}
              </p>
            </div>
            <div className="button-container ">
              <ButtonCoolShadow title="CONTACT" color="red" />
              <ButtonCoolShadow title="ABOUT ME" color="transparent" />
            </div>
          </div>
        </section>




        <section className="default-container ">
          <div className="inner-container ">
            <div className="aboutme-wrapper  ">
              <div className="aboutme-top-container ">
                <div className="aboutme-top-container-title-wrapper ">
                  <h1 className="">ABOUT ME</h1>
                  <div className="tech-stack-container-large ">
                    <NextIcon className="tech-stack-icon " />
                    <NodeIcon className="tech-stack-icon " />
                    <WordpressIcon className="tech-stack-icon " />
                    <WordpressIcon className="tech-stack-icon " />
                  </div>
                </div>
                <GatsbyImage image={coding} alt="Coding" className="portrait" />
              </div>
              <div className="aboutme-bottom-container">
                <h5 className="">WEB DEVELOPER | WEB DESIGNER</h5>
                <div className="tech-stack-container ">
                  <NextIcon className="tech-stack-icon " />
                  <NodeIcon className="tech-stack-icon " />
                  <WordpressIcon className="tech-stack-icon " />
                  <WordpressIcon className="tech-stack-icon " />
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  non posuere dolor. Vivamus et lectus at arcu rhoncus aliquam.
                  Sed tincidunt, dui ut vulputate interdum, massa sapien sodales
                  metus, a fermentum ex quam vitae nulla. Fusce non urna
                  eleifend urna fermentum accumsan. 
                </p>

                <div className="button-container">
                  <ButtonCoolShadow title="SEE JOURNAL" />
                  <ButtonCoolShadow title="PROJECTS" color="transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>
       










        <GridDisplay />
        <FullContactForm />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "guyonlaptopcircle.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    image2: file(relativePath: { eq: "stockcoding.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default Home;
