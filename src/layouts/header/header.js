import React from 'react'
import { Link, StaticQuery, graphql } from "gatsby"
import Navigation from "../navigation/navigation"

import { scale } from "../../utils/typography"
import headerStyles from "./header.module.scss"

class Header extends React.Component {
  render() {
    const { title, description } = this.props.siteMetadata

    return (
      <React.Fragment>
        <header className={headerStyles.siteHeader}>
          <img className={headerStyles.logo} src="/devmemphis-logo.svg" alt="DevMemphis Logo"/>
          <h1
            style={{
              ...scale(1.5),
              margin: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h2 className="siteDescription">{description}</h2>
        </header>
        <Navigation />
      </React.Fragment>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => <Header siteMetadata={data.site.siteMetadata} />}
  />
)
