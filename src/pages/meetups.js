import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Meetups extends React.Component {
  render() {
    const { data } = this.props
    const meetups = data.allMarkdownRemark.edges

    return (
      <div>
        <SEO title="All meetups" />

        <h2>DevMemphis Meetups</h2>

        {meetups.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Meetups

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { collection: { eq: "meetups" } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
