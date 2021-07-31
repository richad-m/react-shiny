import styled from 'styled-components'
import colors from '../../utils/style/color'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import { useState } from 'react'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

function EmailInput() {
  const [input, setInput] = useState('')
  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Entrez email"
      />
      <button type="submit">Entrer</button>
    </div>
  )
}

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
      <EmailInput></EmailInput>
    </FooterContainer>
  )
}

export default Footer
