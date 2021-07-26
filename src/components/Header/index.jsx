import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyle = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
`

function Header() {
  return (
    <nav>
      <LinkStyle to="/"> Accueil </LinkStyle>
      <LinkStyle to="/survey/42"> Questionnaire </LinkStyle>
      <LinkStyle to="/freelance"> Freelance </LinkStyle>
    </nav>
  )
}

export default Header
