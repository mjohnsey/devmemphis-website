import React from 'react'
import { Link } from "gatsby"
import Navigation from "../navigation/navigation"

import { scale } from "../../utils/typography"
import headerStyles from "./header.module.scss"

const HomePageHeader = props => {
  const { title, description } = props
  return (
    <header className={headerStyles.homepageHeader}>
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
  )
}

const CommonHeader = props => {
  const { title } = props
  
  return (
    <header className={headerStyles.commonHeader}>
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
    </header>
  )
}

const Header = props => {
  const rootPath = `${__PATH_PREFIX__}/`

  const header = props.location.pathname === rootPath ? <HomePageHeader {...props}/> : <CommonHeader {...props} />

  return (
    <React.Fragment>
      {header}
      <Navigation />
    </React.Fragment>
  )

}

export default Header
