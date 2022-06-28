import * as React from 'react'
import { Text } from '../styles'
import Image from './Image'
import Paragraph from './Paragraph'
import { SpacerHSm, SpacerHMd, SpacerHXL } from './spacers'

const Content = ({ title, content }) => (
  <div style={styles.container}>
    <h1 style={styles.header}>
      {title}
    </h1>
    <SpacerHMd />
    {content.map((item, ind) => (ind === content.length - 1)
      ? <div>
          <Subcontent item={item} />
          <SpacerHXL />
        </div>
      : <div>
          <Subcontent item={item} />
          <SpacerHSm />
        </div>
      )
    }
  </div>
)

const Subcontent = ({ item }) => (
  (item.type === 'text') ? <Paragraph body={item.content} /> : <Image image={item.content} />
)

const styles = {
  container: {
    margin: 0,
    width: '100%',
    height: '100%',
  },
  header: {
    ...Text.text.largeTitle,
    margin: 0,
  },
}

export default Content