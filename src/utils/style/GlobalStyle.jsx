import { useContext } from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeContext } from '../context'

function GlobalStyle() {
  const StyledGlobalStyle = createGlobalStyle`
      * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
      }
      body {
          background-color: red;
      }
  `
  const theme = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
