/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                filePath
                date
                published
              }
              frontmatter {
                title
                date
                slug
              }
              code {
                scope
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/blog${post.node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          filePath: post.node.fields.filePath,
          previous,
          next,
        },
      })
    })
  })
}

// This generates a node field 'slug' with a value of the file path
// Could use for automaticlaly creating urls from a file path

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const pathToPost = createFilePath({ node, getNode, basePath:`posts` })

    createNodeField({
      name: `id`,
      node,
      value: node.id,
    })

    createNodeField({
      name: `filePath`,
      node,
      value: pathToPost,
    })

    createNodeField({
      name: `slug`,
      node,
      value: `/blog${node.frontmatter.slug}`,
    })

    createNodeField({
      name: `published`,
      node,
      value: node.frontmatter.published,
    })

    createNodeField({
      name: `date`,
      node,
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    })
  }
}
