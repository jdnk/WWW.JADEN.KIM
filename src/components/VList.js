import * as React from 'react'
import { Text } from '../styles'
import { useTheme } from '../contexts/ThemeContext'

const VList = ({ items }) => {
  const theme = useTheme()

  return (
    <div style={styles.container}>
      {items.map((item, ind) =>
        <a id={theme} href={item.link} style={styles.text}>
          {item.title}
        </a>)
      }
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    ...Text.text.body,
  },
}

export default VList