import * as React from "react";

import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import GridDisplay from "../components/grid-display/GridDisplay";
import "../styles/portfolio.css";

import NextIcon from "../assets/nextjs-icon.svg";
import NodeIcon from "../assets/node-icon.svg";
import WordpressIcon from "../assets/wordpress-icon.svg";
import TreeSVG from "../assets/tree.svg";

import ButtonCoolShadow from "../components/buttons/button-cool-shadow";
import FullContactForm from "../components/contact/FullContactForm.js";

import DynamicPortrait from "../components/dynamic-portrait/DynamicPortrait.js";

const Home = ({ data }) => {
  // Get the image data using getImage helper function
  const portrait = getImage(data.image1.childImageSharp.gatsbyImageData);
  const coding = getImage(data.image2.childImageSharp.gatsbyImageData);

  const aboutMeBtnClick = () => {
    console.log("CLICK CLICK CLICK about me");
  };

  return (
    <Layout>
      <div className="home-main-container">
        <section className="home-hero-main-container ">
          <div className="hero-secondary-containter ">
            <DynamicPortrait image={portrait} />

            <div className="hero-text  ">
              <h4>Web Developer</h4>
              <h2 className="">JASON BUNCE</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                gravida lorem quis quam tristique euismod.{" "}
              </p>
            </div>
            <div className="button-container  ">
              <ButtonCoolShadow title="CONTACT" color="red" />
              <ButtonCoolShadow
                title="ABOUT ME"
                color="transparent"
                onClick={aboutMeBtnClick} 
              />
            </div>
          </div>
        </section>

        <section className="aboutme-main-container">
          <div className="inner-container ">
            <div className="aboutme-top-container">
              <div className="aboutme-top-container-title-wrapper ">
                <h1 className="">ABOUT ME</h1>
              </div>
              <GatsbyImage image={coding} alt="Coding" className="portrait" />
            </div>
            <div className="aboutme-bottom-container ">
              <h5 className="">WEB DEVELOPER | WEB DESIGNER</h5>
              <div className="tech-stack-container">
                <NextIcon className="tech-stack-icon " />
                <NodeIcon className="tech-stack-icon " />
                <WordpressIcon className="tech-stack-icon " />
                <WordpressIcon className="tech-stack-icon " />
              </div>
              <p className="">
                As a professional freelancer specialized in web design, SEO, and
                web development, I create state-of-the-art digital solutions
                with a focus on your needs. Examples are: regular business
                websites, applications for administrative purposes (e.g.
                selecting personnel for certain tasks), webshops, food delivery
                web applications, CRMs, and more. In other words: anything that
                needs to appear on the screen to increase your business'
                efficiency and/or attract more users, ultimately generating more
                revenue.
              </p>
              <div className="aboutme-button-container-wrapper ">
                <div className="button-container ">
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
