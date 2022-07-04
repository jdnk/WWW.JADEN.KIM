import '../styles/global.css'
import React, { useState } from 'react'
import { Text } from '../styles'
import { useMediaQuery } from '../hooks'
import Bio from '../components/Bio'
import { SpacerHSm, SpacerHXL, SpacerHXXL, SpacerVXL } from '../components/spacers'
import VList from '../components/VList'
import VListBtn from '../components/VListBtn'
import Layout from '../components/Layout'
import Content from '../components/Content'

const IndexPage = ({ loading, projects }) => {
  const matches = useMediaQuery('md')
  const [selected, setSelected] = useState(null)
  const selectedItem = projects.find(item => item.id === selected)

  return (
    <Layout setSelected={setSelected}>
      <div style={styles.body}>
        <LeftHalf
        projects={projects}
          matches={matches}
          selected={selected}
          setSelected={setSelected}
        />
        {matches
          ? <RightHalf
              loading={loading}
              item={selectedItem}
              selected={selected}
            />
          : null
        }
      </div>
    </Layout>
  )
}

const LeftHalf = ({ projects, matches, selected, setSelected }) => (
  <div style={matches ? styles.leftContainer : styles.mobileContainer}>
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
                items={projects}
                selected={selected}
                setSelected={setSelected}
              />
            : <VList items={projects} />
          }
          <SpacerHXL />
        </div>
      </div>
      {matches ? <SpacerVXL /> : <div style={styles.smallBlock} />}
    </div>
    {matches ? <div style={styles.block} /> : <div style={styles.smallBlockTop} />}
  </div>
)

const RightHalf = ({ loading, item, selected }) => (
  <div style={styles.rightContainer}>
    <div style={styles.rightHalf}>
      {loading
        ? <div style={styles.placeholderText}>Loading...</div>
        : ((selected === null)
        ? <div style={styles.placeholderText}>Click my work.</div>
        : <div style={styles.rightHalfContent}>
            <SpacerHXXL />
            <Content title={item.title} content={item.content} />
          </div>
        )
      }
      {(selected === null) ? null : <SpacerVXL />}
    </div>
    {(selected === null) ? null : <div style={styles.block} />}
  </div>
)

const aboutText = 'I am a 2022 Computer Science/Art graduate from Pomona College. I primarily focus on UI/UX design, but I am well-versed in website/application development, identity design, and graphic design. I love listening to and discovering new music (especially 70s soul, jazz, post-punk, and underground hip-hop) and making my own too (which you can find in the links below)! I love getting to know new people too, so feel free to reach out to me with matters unrelated to employment, as well!'

const styles = {
  body: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100vw',
    display: 'flex',
  },
  leftContainer: {
    width: '33vw',
    position: 'relative',
    marginLeft: 20,
  },
  rightContainer: {
    width: '67vw',
    position: 'relative',
    marginRight: 20,
  },
  mobileContainer: {
    width: '100vw',
    position: 'relative',
    marginLeft: 20,
  },
  leftHalf: {
    height: '100%',
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
  },
  leftHalfMobile: {
    maxHeight: '100%',
    overflow: 'auto',
    display: 'flex',
  },
  rightHalf: {
    height: '100%',
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
  },
  rightHalfContent: {
    width: '100%',
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
  block: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    minWidth: 60,
    maxWidth: 60,
    height: '100vh',
    backgroundColor: '#FFF',
  },
  smallBlock: {
    zIndex: 999,
    margin: 0,
    minWidth: 20,
    maxWidth: 20,
    height: '100vh',
    backgroundColor: '#FFF',
  },
  smallBlockTop: {
    zIndex: 999,
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    minWidth: 20,
    maxWidth: 20,
    height: '100vh',
    backgroundColor: '#FFF',
  },
}

export default IndexPage
