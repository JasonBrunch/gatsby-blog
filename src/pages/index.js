import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";
import beachImage from "../images/beach-concept.jpg";
import JournalSVG from "../assets/journal.svg";
import MailSVG from "../assets/mail.svg";
import QuoteSVG from "../assets/quote.svg";
import Footer from "../components/Footer";

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="navbar-container ">
        <div className="navbar">
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
      <div className="image-container debug">
        <div className="background-image" style={{ backgroundImage: `url(${beachImage})` }}>
          <JournalSVG className="journal-svg " />
        </div>
      </div>
      <section className="quote-container debug">
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