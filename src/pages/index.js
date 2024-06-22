import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";
import beachImage from "../images/beach-concept.jpg";
import JournalSVG from "../assets/journal.svg";
import MailSVG from "../assets/mail.svg";
import QuoteSVG from "../assets/quote.svg";
import Footer from "../components/Footer";


import { useEffect, useState } from "react";

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;



  /*NAVBAR LOGIC*/
/* NAVBAR LOGIC */
const [lastScrollY, setLastScrollY] = useState(0);
const [navbarVisible, setNavbarVisible] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("Current ScrollY: ", currentScrollY);
    console.log("Last ScrollY: ", lastScrollY);

    if (currentScrollY < 200) {
      setNavbarVisible(true);
    } else {
      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
    }
    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [lastScrollY]);





  return (
    <Layout>
      <div className={`navbar-container ${navbarVisible ? 'visible' : 'hidden'} debug`}>
        <div className="navbar debug2">
          <div className="logo-container">
            <h3>JASON BUNCE</h3>
            <div className="circle"></div>
          </div>
          <button className="CTA">
            <MailSVG className="mail-svg" />
            <h5>GET IN TOUCH</h5>
          </button>
        </div>
      </div>
      <section className="image-container">
        <div className="background-image" style={{ backgroundImage: `url(${beachImage})` }}>
          <JournalSVG className="journal-svg " />
        </div>
      </section>
      <section className="quote-container">
        <QuoteSVG className="quote-svg" />
        <h4>WELCOME TO THE JOURNAL</h4>
      </section>
      <section className="blog-post-container">
        {posts.map(({ node }) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            path={node.frontmatter.path}
            image={node.frontmatter.image.childImageSharp.gatsbyImageData}
          />
        ))}
      </section>
      <Footer />
    </Layout>
  );
};
export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
            image {
              childImageSharp {
                gatsbyImageData(width: 600, height: 400, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

export default Home;