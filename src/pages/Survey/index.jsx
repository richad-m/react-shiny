import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

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
  background: grey;
`

function Survey() {
  const { questionNumber } = useParams()
  const questionIntNumber = Number(questionNumber)
  const previousQuestionNumber =
    questionIntNumber === 1 ? 1 : questionIntNumber + 1
  const nextQuestionNumber = questionIntNumber + 1

  return (
    <SurveyWrapper>
      <TitleQuestion>Question {questionNumber}</TitleQuestion>
      <ContentQuestion>
        Votre question doit-elle impérativement apparaître en premier dans les
        résultats de recherche ?
      </ContentQuestion>
      <AnswerWrapper>
        <Answer>Oui</Answer>
        <Answer>Non</Answer>
      </AnswerWrapper>
      <div>
        <Link to={`/survey/${previousQuestionNumber}`}>Précédent </Link>
        {Number(questionNumber) > 9 ? (
          <Link to="/results">Résultats </Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant </Link>
        )}
      </div>
    </SurveyWrapper>
  )
}

export default Survey
