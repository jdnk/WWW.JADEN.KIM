import '../styles/global.css'
import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div style={styles.body}>
      <h1>404.</h1>
    </div>
  </Layout>
)

const styles = {
  body: {
    zIndex: -1,
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100vw',
    display: 'flex',
  },
  text: {
    ...Text.text.headline,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default NotFoundPage
