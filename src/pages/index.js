import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import GridDisplay from "../components/grid-display/GridDisplay";
import "../styles/portfolio.css";
import ButtonWhite from "../components/buttons/button-white";
import Pointer from "../components/pointer/Pointer";


const Home = ({ data }) => {
  // Get the image data using getImage helper function
  const portrait = getImage(data.image1.childImageSharp.gatsbyImageData);
  const coding = getImage(data.image2.childImageSharp.gatsbyImageData);

  return (
    <Layout>



      <div className="home-main-container">

        <section className="home-hero-main-container debug">
          <div className="hero-image debug"><GatsbyImage image={portrait} alt="Me" className="portrait" /></div>
          <div className="hero-text debug">
            <h5 className="debug">Web Developer</h5>
            <h2 className="debug">JASON BUNCE</h2>
            <p className="debug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida lorem quis quam tristique euismod. </p>
            
          </div>
          <ButtonWhite text={"SEE PROJECTS"} />
          <Pointer title="About" className="pointer-container"  />







        </section>


        <section className="default-container">
        <GatsbyImage image={coding} alt="Coding" className="portrait" />
          
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