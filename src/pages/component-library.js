// src/pages/component-library.js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/component-library.css";
import Card2 from "../components/cards/Card2";
import ButtonWhite from "../components/buttons/button-white";
import Slideshow from "../components/slideshow/Slideshow";

const ComponentLibrary = ({ data }) => {
  const slides = [
    {
      imageUrl: data.image1.childImageSharp.gatsbyImageData,
      altText: "Slide 1",
    },
    {
      imageUrl: data.image2.childImageSharp.gatsbyImageData,
      altText: "Slide 2",
    },
    {
      imageUrl: data.image3.childImageSharp.gatsbyImageData,
      altText: "Slide 3",
    },
  ];

  return (
    <Layout>
      <section className="hero-main-container">
        <div className="hero-text-container ">
          <div className="hero-text-content">
            <h1>Component Library</h1>
            <p>
              Beautifully designed, expertly crafted components and templates,
              built by the makers of Tailwind CSS. The perfect starting point
              for your next project.
            </p>
            <ButtonWhite text="Browse components" onClick={() => console.log("Button Clicked")} />
          </div>
        </div>
        <div className="hero-video-container">
          <Slideshow slides={slides} slideDuration={10000} fadeDuration={1000} />
        </div>
      </section>
      <section className="component-card-container">
        <h4>Page Sections</h4>
        <div className="component-card-grid">
          <Card2 title="Hero Sections" description="3 components" path="/hero-section" image={data.image1.childImageSharp.gatsbyImageData} />
          <Card2 title="Contact Sections" description="3 components" path="/features" image={data.image2.childImageSharp.gatsbyImageData} />
          <Card2 title="Footers" description="3 components" path="/features" image={data.image3.childImageSharp.gatsbyImageData} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "350-1080x720.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    image2: file(relativePath: { eq: "575-1080x720.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    image3: file(relativePath: { eq: "778-1080x720.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default ComponentLibrary;