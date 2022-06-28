import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((cur) => (cur === 'light') ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}