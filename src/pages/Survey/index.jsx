import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../../utils/Atoms'
import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import colors from '../../utils/style/color'
import { useFetch } from '../../utils/hooks'

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
  background: ${colors.backgroundLight};
  width: 291px;
  border-radius: 31px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    background: ${colors.primary};
    color: ${colors.backgroundLight};
    border: 2px solid ${colors.primary};
    box-sizing: border-box;
    border-radius: 31px;
    font-weight: bold;
  }
  &:focus {
    background: ${colors.primary};
    color: ${colors.backgroundLight};
    border: none;
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
  // const [surveyData, setSurveyData] = useState({})
  // Previous question should not go below 1
  const previousQuestionNumber =
    questionIntNumber === 1 ? 1 : questionIntNumber - 1
  const nextQuestionNumber = questionIntNumber + 1
  // const [isDataLoading, setDataLoading] = useState(false)
  const { saveAnswers } = useContext(SurveyContext)

  // Function to save answers
  const saveReply = (newAnswer) => {
    saveAnswers({ [questionIntNumber]: newAnswer })
  }
  // Using custom hooks to retrieve questions from survey api
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  const { surveyData } = data

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <SurveyWrapper>
      <TitleQuestion>Question {questionNumber}</TitleQuestion>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <ContentQuestion>
          {surveyData && surveyData[questionNumber]}
        </ContentQuestion>
      )}

      <AnswerWrapper>
        <Answer onClick={() => saveReply(1)}>Oui</Answer>
        <Answer onClick={() => saveReply(0)}>Non</Answer>
      </AnswerWrapper>
      <LinkWrapper>
        <Link to={`/survey/${previousQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionIntNumber + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyWrapper>
  )
}

export default Survey
