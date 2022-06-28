import * as React from 'react'
import { Spacing } from '../../styles'

const SpacerHLg = () => (
  <div style={styles.container} />
)

const styles = {
  container: {
    ...Spacing.spacing.horLg,
  },
}

export default SpacerHLg