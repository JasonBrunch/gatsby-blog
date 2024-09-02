import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import "../styles/projects.css";
import ButtonCoolShadow from "../components/buttons/button-cool-shadow";
import ContactForm from "../components/contact/contactform";
import TabsSVG from "../assets/tabs.svg";

export default function ProjectTemplate({ data }) {
  const project = data.markdownRemark;
  const image = getImage(project.frontmatter.image);

  return (
    <Layout>
      <div className="project-container ">
        <div className="project-inner-container ">
          {/* Project Image */}
          <div className="project-image-container ">
            <GatsbyImage image={image} alt={project.frontmatter.title} />
          </div>

          <div className="project-text-container ">
            <h2>{project.frontmatter.title}</h2>
            <p>{project.frontmatter.description}</p>
          </div>

            <div className="button-container  ">
              <ButtonCoolShadow title="LIVE SITE"  />
              <ButtonCoolShadow title="READ MORE" color="transparent" />
            </div>

          </div>

        <div className="project-inner-container2 debug">
          <div className="project-inner-inner-container debug2" >
            <div className="project-heading-container">
              <h6>IN DETAILS</h6>
              <h4>DESCRIPTION</h4>
              <div className="project-content" dangerouslySetInnerHTML={{ __html: project.html }} />


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
          

          <TabsSVG className="project-description-image-container debug3 " />

          </div>


        </div>
        <ContactForm />
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