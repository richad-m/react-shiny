import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import LogoShiny from '../../assets/logo.png'

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
  color: black;
  padding-left: 5px;
  height: 36.92499542236328px;
  width: 94.5831298828125px;
  left: 81.16607666015625px;
  top: 16.3800048828125px;
  border-radius: 0px;
`

const HeaderWrapper = styled.div`
  // position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  background-color: white;
  color: ${colors.backgroundLight};
`
const LogoImg = styled.img`
  height: 57.427490234375px;
  width: 56.79137420654297px;
  left: 11.6785888671875px;
  top: 6.186248779296875px;
  border-radius: 0px;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NavBar = styled.div``
function Header() {
  return (
    <nav>
      <HeaderWrapper>
        <LogoWrapper>
          <LogoImg src={LogoShiny} alt="logo shiny" />
          <Logo>Shiny</Logo>
        </LogoWrapper>
        <NavBar>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/freelance">Profils</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </NavBar>
      </HeaderWrapper>
    </nav>
  )
}

export default Header
