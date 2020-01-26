import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Posts from "../components/posts"
import Meetups from "../components/meetups"

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.posts.edges
    const nextMeetup = data.nextMeetup.edges
    const pastMeetups = data.pastMeetups.edges

    return (
      <div>
        <SEO title="DevMemphis - A Meetup for Memphis Software Developers" />

        {nextMeetup.length > 0 && <h2>Next Meetup</h2>}
        {nextMeetup.length > 0 && <Meetups meetups={nextMeetup} />}

        <h2>Past Meetups</h2>
        <Meetups meetups={pastMeetups} />
        <Link to="/meetups">All Meetups</Link>

        <h2>Recent Posts</h2>
        <Posts posts={posts} />
        <Link to="/blog">All Posts</Link>

        <h2>Our Sponsors</h2>
        <p>
          DevMemphis is sponsored by{" "}
          <a href="https://twitter.com/VacoMemphis">Vaco Memphis</a>. Looking
          for a job in the Memphis Area? Visit&nbsp;
          <a href="https://www.vaco.com/recruiting-office-locations/memphis-tennessee-recruiting/">
            vaco.com
          </a> or email bob@vaco.com
        </p>
      </div>
    )
  }
}

export default HomePage

export const pageQuery = graphql`
  query($today: Int) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { collection: { eq: "blog" } }
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
    nextMeetup: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { collection: { eq: "meetups" }, timestamp: { gt: $today } }
      limit: 1
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
    pastMeetups: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { collection: { eq: "meetups" }, timestamp: { lt: $today } }
      limit: 2
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
