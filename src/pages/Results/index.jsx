import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SurveyContext } from '../../utils/context'
import { useContext } from 'react'
import { useFetch } from '../../utils/hooks'
import Loader from '../../utils/Atoms'

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
// Using a function to pass answers as string to the api
function queryParams(answers) {
  const keys = Object.keys(answers)
  return keys.reduce((workingparams, key, index) => {
    const isFirstindex = index === 0
    const separator = isFirstindex ? '' : '&'
    return `${workingparams}${separator}a${index + 1}=${answers[key]}`
  }, '')
}
// Using a function to capitalize Titles from the answers fetched to the api
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function Results() {
  const { isLoading, answers } = useContext(SurveyContext)
  // Using custom fetch to retrieve answers from API
  const { data } = useFetch(
    `http://localhost:8000/results/?${queryParams(answers)}`
  )
  const resultsData = data.resultsData
  // Make a string out of titles from resultsData
  const dataTitles =
    resultsData &&
    resultsData.reduce((stringTitles, resultObject, index) => {
      const separator = index === resultsData.length - 1 ? '' : ','
      return `${stringTitles} ${capitalize(resultObject.title)}${separator}`
    }, '')

  return (
    <ResultWrapper>
      <TextResult>Les compétences dont vous avez besoin :</TextResult>
      {isLoading ? (
        <Loader> </Loader>
      ) : (
        <div>
          <TextResult $isResults>{dataTitles}</TextResult>
          <ButtonWrapper>
            <StyledLink to="/freelances" $isFullLink>
              Découvrez nos profils
            </StyledLink>
          </ButtonWrapper>
          {resultsData &&
            resultsData.map((result) => {
              return (
                <div>
                  <DetailedResults $isTitle>
                    {capitalize(result.title)}
                  </DetailedResults>
                  <DetailedResults>{result.description}</DetailedResults>
                </div>
              )
            })}
        </div>
      )}
    </ResultWrapper>
  )
}

export default Results
