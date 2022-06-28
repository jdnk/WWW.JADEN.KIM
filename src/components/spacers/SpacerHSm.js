import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerHSm = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.horSm,
  },
}

export default SpacerHSm