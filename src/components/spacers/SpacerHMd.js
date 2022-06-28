import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerHMd = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.horMd,
  },
}

export default SpacerHMd