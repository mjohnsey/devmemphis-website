import React from 'react'
import { Link, StaticQuery } from "gatsby"
import navigationStyles from "./navigation.module.scss"

const Navigation = props => {
  const { menuLinks } = props.siteMetadata

  return (
    <div className={navigationStyles.siteNavigation}>
      <nav>
        {menuLinks.map(page => (
          <Link
            key={page.name}
            className={navigationStyles.navLink}
            activeStyle={{ background: "#0084B4" }}
            to={page.link}>{page.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Navigation siteMetadata={data.site.siteMetadata} />}
  />
)
