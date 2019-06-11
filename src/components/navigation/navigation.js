import React from 'react'
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.scss"

const Navigation = () => (
  <div className={navigationStyles.siteNavigation}>
    <nav>
      <Link className={navigationStyles.navLink} activeStyle={{background: "#0084B4"}} to='/'>Home</Link>
      <Link className={navigationStyles.navLink} activeStyle={{background: "#0084B4"}} to='/blog'>Blog</Link>
      <Link className={navigationStyles.navLink} activeStyle={{background: "#0084B4"}} to='/meetups'>Meetups</Link>
    </nav>
  </div>
)

export default Navigation
