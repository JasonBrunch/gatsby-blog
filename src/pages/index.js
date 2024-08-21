import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import GridDisplay from "../components/grid-display/GridDisplay";
import "../styles/portfolio.css";
import ButtonWhite from "../components/buttons/button-white";
import Pointer from "../components/pointer/Pointer";
import NextIcon from "../assets/nextjs-icon.svg";
import NodeIcon from "../assets/node-icon.svg";
import WordpressIcon from "../assets/wordpress-icon.svg";
import ButtonCoolShadow from "../components/buttons/button-cool-shadow";


const Home = ({ data }) => {
  // Get the image data using getImage helper function
  const portrait = getImage(data.image1.childImageSharp.gatsbyImageData);
  const coding = getImage(data.image2.childImageSharp.gatsbyImageData);

  return (
    <Layout>



      <div className="home-main-container">

        <section className="home-hero-main-container ">
          <div className="hero-secondary-containter ">



            <div className="hero-image"><GatsbyImage image={portrait} alt="Me" className="portrait" /></div>
            <div className="hero-text ">
              <h4 >Web Developer</h4>
              <h3 >JASON BUNCE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida lorem quis quam tristique euismod. </p>

            </div>
           
            <div className="button-container"><ButtonCoolShadow/><ButtonCoolShadow/></div>
          </div>
          <div className="pointer-container-container">
             <Pointer title="About" className="pointer-container" />
          </div>
         


        </section>


        <section className="default-container">
          <div className="inner-container">
            <h4 className="">SERVICES & TECH</h4>
            <GatsbyImage image={coding} alt="Coding" className="portrait" />
            <h5>WEB DEVELOPER | WEB DESIGNER</h5>
            <div className="tech-stack-container ">
              <NextIcon className="tech-stack-icon " />
              <NodeIcon className="tech-stack-icon " />
              <WordpressIcon className="tech-stack-icon " />
              <WordpressIcon className="tech-stack-icon " />


            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non posuere dolor.
              Vivamus et lectus at arcu rhoncus aliquam. Sed tincidunt, dui ut vulputate interdum,
              massa sapien sodales metus, a fermentum ex quam vitae nulla. Fusce non urna eleifend
              urna fermentum accumsan. Vivamus et lectus at arcu rhoncus.
            </p>
            <ButtonCoolShadow/>
            <ButtonCoolShadow/>

          </div>

          <Pointer title="PROJECTS" />
        </section>





        <GridDisplay />
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