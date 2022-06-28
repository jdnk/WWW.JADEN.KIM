import * as React from 'react'
import { Text } from '../styles'
import { SpacerHSm, SpacerHXL } from './spacers'
import { useTheme } from '../contexts/ThemeContext'

const Bio = ({ title, body }) => {
  const theme = useTheme()

  return (
    <div>
      <h1 id={theme} style={styles.header}>
        {title}
      </h1>
      <SpacerHSm />
      <p id={theme} style={styles.body}>
        {body}
      </p>
      <SpacerHXL />
    </div>
  )
}

const styles = {
  header: {
    ...Text.text.title,
    margin: 0,
  },
  body: {
    ...Text.text.body,
    margin: 0,
  },
}

export default Bio