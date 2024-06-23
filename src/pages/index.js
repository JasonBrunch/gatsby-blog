import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Card from "../components/Card";
import beachImage from "../images/beach-concept.jpg";
import JournalSVG from "../assets/journal.svg";
import QuoteSVG from "../assets/quote.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useEffect, useRef } from "react";





const Home = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const blogPostContainerRef = useRef(null);




  /*TEXT MOVEMENT CODE*/
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px 20% 0px', // Start the animation 20% before the element enters the viewport
      threshold: 0, // Trigger when any part of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (blogPostContainerRef.current) {
      observer.observe(blogPostContainerRef.current);
    }

    return () => {
      if (blogPostContainerRef.current) {
        observer.unobserve(blogPostContainerRef.current);
      }
    };
  }, []);




  return (
    <Layout>
     <Navbar/>
      <section className="image-container">
        <div className="background-image" style={{ backgroundImage: `url(${beachImage})` }}>
          <JournalSVG className="journal-svg " />
        </div>
      </section>
      <section className="quote-container">
        <QuoteSVG className="quote-svg" />
        <h4>WELCOME TO THE JOURNAL</h4>
      </section>
      <section className="blog-post-container move-up-text"
      ref={blogPostContainerRef}
      >
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