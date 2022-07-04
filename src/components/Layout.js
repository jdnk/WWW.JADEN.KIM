import * as React from 'react'
import Header from './Header'
import Ticker from './Ticker'
import Footer from './Footer'
import { SpacerHMd } from './spacers'

const Layout = ({ children, setSelected }) => (
  <>
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/bqv0umn.css" />
    </head>
    <div style={styles.container}>
      <Ticker />
      <SpacerHMd />
      <Header setSelected={setSelected} />
        <main>{children}</main>
      <Footer />
    </div>
  </>
)

const styles = {
  container: {
  },
}

export default Layout
