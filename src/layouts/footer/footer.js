import React from 'react'
import footerStyles from "./footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.siteFooter}>
    <div className="content">
      <p>© {new Date().getFullYear()} DevMemphis</p>
    </div>
  </footer>
)

export default Footer
