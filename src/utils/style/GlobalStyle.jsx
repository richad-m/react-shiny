import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/index'

//Creating a global style for all the app
const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#22272E' : 'white'};

    }
`
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  console.log(`voici la valeur du theme ${theme}`)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
