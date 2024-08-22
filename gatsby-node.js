const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
            id
            fileAbsolutePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error("Could not query posts", result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    // Determine if this is a blog post or project based on the file path
    const isProject = node.fileAbsolutePath.includes("/projects/");
    const template = isProject
      ? path.resolve(`./src/templates/project-template.js`)
      : path.resolve(`./src/templates/blog-post.js`);

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {
        id: node.id,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemarkFrontmatter {
      title: String!
      date: Date
      description: String!
      path: String!
      image: File @fileByRelativePath
      technologies: [String!] # Added for project files
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `);
};