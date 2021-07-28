import React, { useState, createContext } from 'react'

// Creating context Theme related
export const ThemeContext = createContext()

// Creating Provider component with infos (state & fct)
// Setting 'light' as default theme & creating a toggle function (light <-> dark)
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }

  return (
    // Values are the info from the context which could be retrived by consumers
    // Passing children to the components as we have no idea what would be passed to it
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//Creating a context survey related
export const SurveyContext = createContext()

// Creating a survey provider for this context with state & fct
export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({}) // Setting state with answers
  // Saving newAnswers by pushing in the state along with answers
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
