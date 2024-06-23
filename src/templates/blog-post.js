import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const image = getImage(post.frontmatter.image)

  return (
    <Layout>
      <div className="main-container">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 800, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`