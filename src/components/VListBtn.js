import * as React from 'react'
import { Text } from '../styles'
import { useTheme } from '../contexts/ThemeContext'

const VListBtn = ({ items, selected, setSelected }) => {
  const theme = useTheme()

  return (
    <div style={styles.container}>
      {items.map((item, ind) => selected === item.id
        ? <p
            id={theme}
            style={styles.textSelected}
          >
            {item.title}
          </p>
        : <button
            id={theme}
            onClick={() => setSelected(item.id)}
            style={styles.text}
          >
            {item.title}
          </button>
        )
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
    margin: 0,
  },
  textSelected: {
    ...Text.text.bold,
    margin: 0,
    color: '#CCC'
  },
}

export default VListBtn