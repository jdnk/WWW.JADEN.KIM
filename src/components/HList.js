import * as React from 'react'
import { Text } from '../styles'
import { useTheme } from '../contexts/ThemeContext'

const HList = ({ items }) => {
  const theme = useTheme()

  return (
    <div style={styles.row}>
      {items.map((item, ind) => (ind === items.length - 1)
        ? <a id={theme} href={item.link} style={styles.lastText}>{item.title}</a>
        : <a id={theme} href={item.link} style={styles.text}>{item.title}</a>)
      }
    </div>
  )
}

const styles = {
  row: {
    margin: 0,
    display: 'flex',
  },
  text: {
    ...Text.text.item,
    margin: 0,
    marginRight: 20,
  },
  lastText: {
    ...Text.text.item,
    margin: 0,
  }
}

export default HList
