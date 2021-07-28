import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Loader from '../../utils/Atoms'

//Adding styled-components to add style
const TitleQuestion = styled.div`
  height: 22px;
  left: 624px;
  top: 273px;
  margin: 0 auto;
  width: 90px;
  font-weight: bold;
  border-bottom: 2px solid #5843e4;
  margin-bottom: 20px;
`
const Answer = styled.div`
  height: 96px;
  width: 291px;
  left: 399px;
  top: 491px;
  border-radius: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    background: #f9f9fc;
    border: 2px solid #5843e4;
    box-sizing: border-box;
    border-radius: 31px;
    font-weight: bold;
  }
`

const ContentQuestion = styled.div`
  height: 70px;
`
const AnswerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  justify-content: space-around;
`
const SurveyWrapper = styled.div`
  padding-top: 100px;
  text-align: center;
`

function Survey() {
  // Retrieving params from the URL as specified in the route
  const { questionNumber } = useParams()
  // Use it as an int to be incremented / decremented
  const questionIntNumber = Number(questionNumber)
  // Setting state as an empty object
  const [surveyData, setSurveyData] = useState({})
  // Previous question should not go below 1
  const previousQuestionNumber =
    questionIntNumber === 1 ? 1 : questionIntNumber - 1
  const nextQuestionNumber = questionIntNumber + 1
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/survey`).then((response) =>
      response
        .json()
        .then(
          ({ surveyData }) => setSurveyData(surveyData),
          setDataLoading(false)
        )
        .catch((error) => console.log(error))
    )
  }, [])
  return (
    <SurveyWrapper>
      <TitleQuestion>Question {questionNumber}</TitleQuestion>
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <ContentQuestion>{surveyData[questionNumber]}</ContentQuestion>
      )}

      <AnswerWrapper>
        <Answer>Oui</Answer>
        <Answer>Non</Answer>
      </AnswerWrapper>
      <div>
        <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>
    </SurveyWrapper>
  )
}

export default Survey
