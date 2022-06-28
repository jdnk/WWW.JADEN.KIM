import '../styles/global.css'
import React, { useState, useEffect } from 'react'
import { Text } from '../styles'
import { useMediaQuery } from '../hooks'
import Bio from '../components/Bio'
import { SpacerHSm, SpacerHXL, SpacerHXXL, SpacerVXL } from '../components/spacers'
import VList from '../components/VList'
import VListBtn from '../components/VListBtn'
import Layout from '../components/Layout'
import Content from '../components/Content'
import data from '../assets/data'

const IndexPage = () => {
  const matches = useMediaQuery('md')
  const [selected, setSelected] = useState(null)
  const selectedItem = data.find(item => item.id === selected)

  return (
    <Layout setSelected={setSelected}>
      <div style={styles.body}>
        <LeftHalf
          matches={matches}
          selected={selected}
          setSelected={setSelected}
        />
        {matches
          ? <RightHalf
              item={selectedItem}
              selected={selected}
            />
          : null
        }
      </div>
    </Layout>
  )
}

const LeftHalf = ({ matches, selected, setSelected }) => (
  <div style={matches ? styles.leftHalf : styles.leftHalfMobile}>
    <div>
      <SpacerHXXL />
      <Bio title={'About'} body={aboutText} />
      <div>
        <h1 style={styles.header}>
          Work
        </h1>
        <SpacerHSm />
        {matches
          ? <VListBtn
              items={data}
              selected={selected}
              setSelected={setSelected}
            />
          : <VList items={data} />
        }
        <SpacerHXL />
      </div>
    </div>
    {matches ? <SpacerVXL /> : null}
  </div>
)

const RightHalf = ({ item, selected }) => {

  return (
    <div style={styles.rightHalf}>
      {(selected === null)
        ? <div style={styles.placeholderText}>Click my work.</div>
        : <div style={styles.rightHalfContent}>
            <SpacerHXXL />
            <Content title={item.title} content={item.content} />
          </div>
      }
      {(selected === null) ? null : <SpacerVXL />}
    </div>
  )
}

const aboutText = 'I am a 2022 Computer Science/Art graduate from Pomona College. I primarily focus on UI/UX design, but I am well-versed in website/application development, identity design, and graphic design. I love listening to and discovering new music (especially 70s soul, jazz, post-punk, and underground hip-hop) and making my own too (which you can find in the links below)! I love getting to know new people too, so feel free to reach out to me with matters unrelated to employment, as well!'

const styles = {
  body: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
  },
  leftHalf: {
    marginLeft: 20,
    width: '33vw',
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
  },
  leftHalfMobile: {
    marginLeft: 20,
    marginRight: 20,
    width: '100vw',
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
  },
  rightHalf: {
    marginRight: 20,
    width: '67vw',
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
  },
  rightHalfContent: {
    width: '100%',
    height: '100%',
  },
  header: {
    ...Text.text.title,
    margin: 0,
  },
  placeholderText: {
    ...Text.text.headline,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default IndexPage