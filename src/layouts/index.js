import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
          style={{
            display: `flex`,
            minHeight: `100vh`,
            flexDirection: `column`
          }}
        >
        <Header />
        <div
          style={{
            flex: 1,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
