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
            <ButtonCoolShadow title="LIVE SITE" />
            <ButtonCoolShadow title="READ MORE" color="transparent" />
          </div>

        </div>

        <div className="project-inner-container2 ">
          <div className="project-inner-inner-container " >
            <div className="project-heading-container">
              <h6>IN DETAILS</h6>
              <h4>DESCRIPTION</h4>
            </div>

            <div className="project-content" dangerouslySetInnerHTML={{ __html: project.html }} />




            <TabsSVG className="project-description-image-container  " />
              {/* Technologies Section */}
              <div className="project-heading-container ">
                <h6>FOR TECH SAVVY</h6>
                <h4>TECHNOLOGIES</h4>
              </div>
              <div className="project-content">
                 <p>{project.frontmatter.technologies_description}</p>
              </div>
             


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
      <ContactForm />
   
    </Layout >
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
        technologies_description 
      }
    }
  }
`;