import '../styles/global.css'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SpacerHXXL } from '../components/spacers'
import Layout from '../components/Layout'
import Content from '../components/Content'
import data from '../assets/data'

const ProjectPage = () => {
  const { project } = useParams()
  const selectedItem = data.find(item => item.id === project)

  return (
    <Layout>
      <div style={styles.body}>
        <Project item={selectedItem}/>
      </div>
    </Layout>
  )
}

const Project = ({ item }) => (
  <div style={styles.mobileContainer}>
    <div style={styles.mobileContent}>
      <div>
        <SpacerHXXL />
        <Content title={item.title} content={item.content} />
      </div>
      <div style={styles.smallBlock} />
    </div>
    <div style={styles.smallBlockTop} />
  </div>
)

const styles = {
  body: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
  },
  mobileContainer: {
    width: '100vw',
    position: 'relative',
    marginLeft: 20,
  },
  mobileContent: {
    maxHeight: '100vh',
    overflow: 'auto',
    display: 'flex',
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

export default ProjectPage