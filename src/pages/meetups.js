import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Meetups from "../components/meetups"

class MeetupsPage extends React.Component {
  render() {
    const { data } = this.props
    const meetups = data.allMarkdownRemark.edges

    return (
      <div>
        <SEO title="All meetups" />

        <h2>DevMemphis Meetups</h2>
        <Meetups meetups={meetups} />

      </div>
    )
  }
}

export default MeetupsPage

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
            description
          }
        }
      }
    }
  }
`
