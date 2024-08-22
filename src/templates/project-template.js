import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../styles/projects.css";
import ButtonCoolShadow from "../components/buttons/button-cool-shadow";

export default function ProjectTemplate({ data }) {
  const project = data.markdownRemark;
  const image = getImage(project.frontmatter.image);

  return (
    <Layout>
      <div className="project-container">
        <div className="inner-container">
          {/* Project Image */}
          <GatsbyImage image={image} alt={project.frontmatter.title} />

          {/* Project Title */}
          <h2>{project.frontmatter.title}</h2>

          {/* Description */}
          <p>{project.frontmatter.description}</p>

          {/* Buttons Section */}
          <div className="button-container">
            <ButtonCoolShadow
              text="View Project"
              link={project.frontmatter.path}
            />
            <ButtonCoolShadow text="Contact" link="/contact" />
          </div>
        </div>
        <div className="inner-container2">
          {/* Project Content */}
          <h6>IN DETAILS</h6>
          <div className="project-content"
            
            dangerouslySetInnerHTML={{ __html: project.html }}
          />

          {/* Technologies Section */}
          <div className="technologies-section">
            <div className="icons-container">
              {project.frontmatter.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.publicURL}
                  alt={project.frontmatter.technologies[index]}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
        technologies
        icons {
          publicURL
        }
      }
    }
  }
`;