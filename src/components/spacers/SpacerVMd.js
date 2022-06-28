import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerVMd = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.verMd,
  },
}

export default SpacerVMd