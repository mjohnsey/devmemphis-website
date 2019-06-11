import React from 'react'
import { Link } from "gatsby"
import Navigation from "../navigation"

import { rhythm, scale } from "../../utils/typography"
import headerStyles from "./header.module.scss"

const Header = props => {
  const { location, title, description } = props
  const rootPath = `${__PATH_PREFIX__}/`

  let header

  if (location.pathname === rootPath) {
    header = (
      <React.Fragment>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
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
        <h2>{description}</h2>
      </React.Fragment>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
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
      </h3>
    )
  }

  return (
    <React.Fragment>
      <header className={headerStyles.siteHeader}>{header}</header>
      <Navigation />
    </React.Fragment>
  )

}

export default Header
