import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import IndexPage from './pages'
import ProjectPage from './pages/project'

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/:project' element={<ProjectPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
