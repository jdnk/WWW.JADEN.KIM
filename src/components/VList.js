import * as React from 'react'
import { Link } from 'react-router-dom'
import { Text } from '../styles'
import { useTheme } from '../contexts/ThemeContext'

const VList = ({ items }) => {
  const theme = useTheme()

  return (
    <div style={styles.container}>
      {items.map((item, ind) =>
        <Link id={theme} to={item.id} style={styles.text}>
          {item.title}
        </Link>)
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