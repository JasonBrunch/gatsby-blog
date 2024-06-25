import React from "react";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import "../styles/contact-page.css";


const ContactPage = ({ data }) => {
    const image = getImage(data.contactImage);

    return (
        <Layout>
            <div className="main-contact-container">
                <div className="contact-container">
                    <div className="contact-text-container">
                        <h2>Let's catchup in one of those bougie coffee shops ... or on Zoom!</h2>
                        
                    </div>
                    <div className="contact-image-container">
                    <h3>Email: <a href="mailto:jbunce.dev@gmail.com" className="email-link">jbunce.dev@gmail.com</a></h3>
                        <h3>Instagram: mustafa_sheikh</h3>
                        <GatsbyImage image={image} alt="Contact" className="contact-image" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
  query {
    contactImage: file(relativePath: { eq: "mustafa.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;

export default ContactPage;