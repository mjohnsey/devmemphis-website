import React from 'react'
import { Link, StaticQuery } from "gatsby"
import navigationStyles from "./navigation.module.scss"
import { Location } from '@reach/router';

const Navigation = props => {
  const { menuLinks } = props.siteMetadata
  const {pathname} = props.location

  return (
    <div className={navigationStyles.siteNavigation}>
      <nav >
          {menuLinks.map(page => (
            <Link
              key={page.name}
              className={navigationStyles.navLink}
              to={page.link}
              partiallyActive={true}
              activeStyle={page.link === '/' && pathname !== '/' ? {} : { background: "#0084B4" }}
              >
              {page.name}
            </Link>
          ))}
          </nav>
    </div>
  )
}

export default () => (
  <Location>
    {locationProps => <StaticQuery
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
    render={data => <Navigation {...locationProps} siteMetadata={data.site.siteMetadata} />}
  />}
  </Location>
)
