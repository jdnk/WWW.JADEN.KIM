import '../styles/global.css'
import React, { useState } from 'react'
import { SpacerHXXL } from '../components/spacers'
import Layout from '../components/Layout'
import Content from '../components/Content'
import data from '../assets/data'

const ProjectPage = () => (
  <Layout>
    <Project />
  </Layout>
)

const Project = () => (
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