import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

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
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
