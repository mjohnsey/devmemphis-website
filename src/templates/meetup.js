import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import MeetupButton from "../components/button/button"
import { rhythm, scale } from "../utils/typography"

class MeetupTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <MeetupButton
          link={post.frontmatter.meetupLink}
          linkText={`View and RSVP on Meetup`}
        />
        <h2>Our Sponsors</h2>
        <p>Pizza provided by <a href={`https://twitter.com/VacoMemphis`}>Vaco Memphis</a>.
        Looking for a job in the Memphis Area? Visit
        <a href={`https://www.vaco.com/recruiting-office-locations/memphis-tennessee-recruiting/`}>vaco.com</a> or email bob@vaco.com</p>
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
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
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default MeetupTemplate

export const pageQuery = graphql`
  query MeetupBySlug($slug: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        meetupLink
      }
    }
  }
`
