import resume from '../assets/resume.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/style/color'

const ResumeSVG = styled.img`
  flex: 1;
`
const TestButton = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  height: 40px;
  width: 261px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const CatchPhrase = styled.div`
  height: 249px;
  width: 552px;
  left: 163px;
  top: 376px;
  border-radius: nullpx;
  font-family: Trebuchet MS;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: left;
`
const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  height: 824px;
  width: 100%;
  left: 65px;
  top: 200px;
  border-radius: 0px;
`
const ButtonWrapper = styled.div`
  height: 40px;
  width: 261px;
`
function Home() {
  return (
    <Banner>
      <CatchPhrase>
        <div>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </div>
        <ButtonWrapper>
          <TestButton to="/survey/1" $isFullLink>
            Faire le test
          </TestButton>
        </ButtonWrapper>
      </CatchPhrase>
      <ResumeSVG src={resume} alt="shiny resume" />
    </Banner>
  )
}

export default Home
