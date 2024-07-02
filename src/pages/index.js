import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import GridDisplay from "../components/grid-display/GridDisplay";
import "../styles/portfolio.css";

const Home = ({ data }) => {
  // Get the image data using getImage helper function
  const portrait = getImage(data.image1.childImageSharp.gatsbyImageData);

  return (
    <Layout>
     
      
      <GridDisplay/>
      <div className="home-main-container">
        <div className="home-about-container-black">
          <h4>Multi disciplinary creative based in Auckland, crafting Digital Experiences at Colenso BBDO.</h4>
          <h5>With stories from 3 continents, speaking 4.5 languages in a mixed accent,
            I work & play at an intersection of design and technology for the last 15 years.</h5>
        </div>
        <div className="home-about-container-white">
          <GatsbyImage image={portrait} alt="Mustafa" className="portrait" />
          <div className="home-about-text-container">
            <h4>Renaissance man against the cult of specialisation.</h4>
            <p class="paragraph-spacing">In the last decade of living between countries, I worked across a diverse range of mediums and project types, in both digital and traditional, client-side and agency roles.</p>
            <p>On weekends, I write or film about these work experiences, learnings and some other stories in my Journal.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "mustafa2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

export default Home;