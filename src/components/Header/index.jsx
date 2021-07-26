import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'

import LogoShiny from 'src/assets/Logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const Logo = styled.div`
  font-size: 34px;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  color: ${colors.backgroundLight};
`
const LogoImg = styled.img``

function Header() {
  return (
    <nav>
      <HeaderWrapper>
        <LogoImg src={LogoShiny} alt="logo shiny"></LogoImg>
        <Logo>Shiny</Logo>
        <div>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/freelance">Profils</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </div>
      </HeaderWrapper>
    </nav>
  )
}

export default Header
