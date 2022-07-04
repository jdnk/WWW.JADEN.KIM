import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import IndexPage from './pages'
import ProjectPage from './pages/project'

const App = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  const ref = firebase.firestore().collection('projects')

  const getProjects = () => {
    setLoading(true)

    ref.onSnapshot((querySnapshot) => {
      const projects = []
      querySnapshot.forEach((doc) => {
        projects.push(doc.data())
      })

      setProjects(projects)
      setLoading(false)
    })
  }

  useEffect(() => {
    getProjects()
  })

  if (loading) <h1>Loading...</h1>

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage loading={false} projects={projects} />} />
          <Route path='/:project' element={<ProjectPage projects={projects} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
