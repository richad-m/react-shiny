import React, { useState, createContext } from 'react'

// Creating context Theme related
export const ThemeContext = createContext()

// Creating Provider component with infos (state & fct)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    // Values are the info from the context which could be retrived by consumers
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
