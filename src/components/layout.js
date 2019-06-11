import React from "react"
import Header from "./header/header"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props

    return (
      <React.Fragment>
        <Header location={location} title={title} description={description} />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>


    )
  }
}

export default Layout
