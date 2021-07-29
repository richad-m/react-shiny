import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Loader from '../../utils/Atoms'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import colors from '../../utils/style/color'

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
const Answer = styled.button`
  height: 96px;
  background: white;
  width: 291px;
  left: 399px;
  top: 491px;
  border-radius: 31px;
  border: 2px solid black;
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
  &:focus {
    background: #5843e4;
    color: white;
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
// const ReplyBox = styled.button`
//   border: none;
//   height: 100px;
//   width: 300px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.backgroundLight};
//   border-radius: 30px;
//   cursor: pointer;
//   box-shadow: ${(props) =>
//     props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
//   &:first-child {
//     margin-right: 15px;
//   }
//   &:last-of-type {
//     margin-left: 15px;
//   }
// `

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
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
  const { answers, saveAnswers } = useContext(SurveyContext)

  const saveReply = (newAnswer) => {
    saveAnswers({ [questionIntNumber]: newAnswer })
  }

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
        <Answer onClick={() => saveReply(true)}>Oui</Answer>
        <Answer onClick={() => saveReply(false)}>Non</Answer>
      </AnswerWrapper>
      <LinkWrapper>
        <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
        {surveyData[questionIntNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyWrapper>
  )
}

export default Survey
