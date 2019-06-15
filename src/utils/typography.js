import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1,h1 a" : {
      fontFamily: 'teko'
    },
    "main h1, main h2, main h3": {
      color: '#2f537b'
    },
    "main h2": {
      fontSize: '2em'
    },
    "h2,h2 a" : {
      fontFamily: 'teko',
      fontWeight: 500
    },
    "h3,h3 a" : {
      fontFamily: 'teko',
      fontWeight: 300
    },
    "h3 a" : {
      fontFamily: 'teko',
      fontWeight: 300,
      fontSize: '1.3em'
    },
    "small" : {
      fontFamily: 'open sans'
    },
    "p,a" : {
      fontFamily: 'open sans'
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
