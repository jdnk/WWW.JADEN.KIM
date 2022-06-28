import * as React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext'

const wrapRootElement = ({ children }) => <ThemeProvider {...children} />

export default wrapRootElement