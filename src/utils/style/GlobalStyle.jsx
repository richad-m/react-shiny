import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../context/index'

//Creating a global style for all the app
function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  console.log(`voici la valeur du theme ${theme}`)
  const StyledGlobalStyle = createGlobalStyle`
      * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
      }
      body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#22272E' : 'white'};

      }
  `
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle

// const StyledLink = styled(Link)`
//   padding: 15px;
//   color: #8186a0;
//   text-decoration: none;
//   font-size: 18px;
//   ${(props) =>
//     props.$isFullLink &&
//     `color: white; border-radius: 30px; background-color: ${colors.primary};`}
