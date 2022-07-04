import * as React from 'react'
import { SpacerHSm } from './spacers'
import HList from './HList'

const Footer = () => (
  <div style={styles.footer}>
    <HList items={items}/>
    <SpacerHSm />
  </div>
)

const items = [
  {
    id: 'gh',
    title: 'Github',
    link: 'https://github.com/jdnk'
  },
  {
    id: 'li',
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/jdnk'
  },
  {
    id: 'mu',
    title: 'Music',
    link: 'https://songwhip.com/isaiahmoss/wind-up-fantasy'
  },
  {
    id: 'ig',
    title: 'Instagram',
    link: 'https://instagram.com/isaiahhaswifi'
  },
]

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    margin: 0,
    marginLeft: 20,
    marginRight: 20,
  },
}

export default Footer
