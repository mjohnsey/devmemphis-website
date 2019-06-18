import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Posts from "../components/posts"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.posts.edges

    return (
      <div>
        <SEO title="DevMemphis Blog" />

        <h2>DevMemphis Blog</h2>

        <Posts posts={posts}/>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      }, 
      filter: { 
        collection: { eq: "blog" } 
      }
    ) {
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
