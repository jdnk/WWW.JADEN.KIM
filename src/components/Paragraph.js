import * as React from 'react'
import { Text } from '../styles'
import { useTheme } from '../contexts/ThemeContext'

const Paragraph = ({ body }) => {
  const theme = useTheme()

  return (
    <div>
      <p id={theme} style={styles.body}>
        {body}
      </p>
    </div>
  )
}

const styles = {
  body: {
    ...Text.text.body,
    margin: 0,
  },
}

export default Paragraph
