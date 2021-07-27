import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TextResult = styled.div`
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 35px;
  text-align: center;
  ${(props) => props.$isResults && `color: #5843E4; margin-bottom: 70px;`}
`
const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4; margin-bottom: 30px`}
`
const ButtonWrapper = styled.div`
  margin-bottom: 30px;
`

const DetailedResults = styled.div`
  color: grey;
  margin-bottom: 30px;
  text-align: left;
  ${(props) => props.$isTitle && `color: #5843E4; margin-bottom: 0px `}
`
const ResultWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-top: 50px;
  width: 50%;
`

function Results() {
  return (
    <ResultWrapper>
      <TextResult>Les compétences dont vous avez besoin :</TextResult>
      <TextResult $isResults>UX Design, frontend, backend</TextResult>
      <ButtonWrapper>
        <StyledLink to="/freelance" $isFullLink>
          Découvrez nos profils
        </StyledLink>
      </ButtonWrapper>
      <DetailedResults $isTitle>UX Design</DetailedResults>
      <DetailedResults>
        Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      </DetailedResults>
      <DetailedResults $isTitle>Frontend</DetailedResults>
      <DetailedResults>
        Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      </DetailedResults>
      <DetailedResults $isTitle>Backend</DetailedResults>
      <DetailedResults>
        Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      </DetailedResults>
    </ResultWrapper>
  )
}

export default Results
