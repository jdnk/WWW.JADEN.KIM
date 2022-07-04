import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerVXL = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.verXL,
  },
}

export default SpacerVXL
