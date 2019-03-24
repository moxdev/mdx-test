import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const { edges: posts } = data.allMdx

  return (
    <Layout location={data.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div>
        <Link to="/tags">All tags</Link>
        <Link to="/categories">All cats</Link>
      </div>

      {posts.map(({ node }) => {
        const title = node.fields.title
        return (
          <div key={node.id}>
            <h3
              style={{
                marginBottom: `1rem`,
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.postUrl}>
                {title}
              </Link>
            </h3>
            <small>{node.fields.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            title
            date(formatString: "MMMM DD, YYYY")
            postUrl
          }
        }
      }
    }
  }
`
export default BlogPage