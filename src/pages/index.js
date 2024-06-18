import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";
import beachImage from "../images/beach-concept.jpg";
import JournalSVG from "../assets/journal.svg";
import MailSVG from "../assets/mail.svg";
import QuoteSVG from "../assets/quote.svg";

const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="navbar-container debug2">
        <div className="navbar ">
          <div className="logo-container">
            <h3>JASON BUNCE</h3>
            <div className="circle"></div>
          </div>
          <button className="CTA">
            <MailSVG className="mail-svg" />
            <h4>GET IN TOUCH</h4>
          </button>
        </div>
      </div>
      <div className="image-container debug">
        <div className="background-image" style={{ backgroundImage: `url(${beachImage})` }}>
          <JournalSVG className="journal-svg debug2" />
        </div>
      </div>
      <section className="quote-container debug">
        <QuoteSVG className="quote-svg" />
        <h4>WELCOME TO THE JOURNAL</h4>
      </section>
      <div className="cards-container">
        {posts.map(({ node }) => (
          <Card
            key={node.id}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            path={node.frontmatter.path}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
          }
        }
      }
    }
  }
`;

export default Home;