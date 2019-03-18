import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const author = this.props.data.site.siteMetadata.author
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
            marginBottom: `1rem`,
            marginTop: `1rem`,
          }}
        >
          {post.frontmatter.date}
        </p>
        <p
          style={{
            display: `block`,
            marginBottom: `1rem`,
            marginTop: `1rem`,
          }}
        >
          {author}
        </p>
        <p
          style={{
            display: `block`,
            marginBottom: `1rem`,
            marginTop: `1rem`,
          }}
        >
          {post.frontmatter.tags}
        </p>
        <MDXRenderer>{post.code.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: `1rem`,
          }}
        />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/blog/${previous.frontmatter.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/blog/${next.frontmatter.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($filePath: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { filePath: { eq: $filePath } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
