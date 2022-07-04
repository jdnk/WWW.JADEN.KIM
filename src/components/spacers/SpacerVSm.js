import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerVSm = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.verSm,
  },
}

export default SpacerVSm
