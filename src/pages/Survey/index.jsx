import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionIntNumber = Number(questionNumber)
  const previousQuestionNumber =
    questionIntNumber === 1 ? 1 : questionIntNumber + 1
  const nextQuestionNumber = questionIntNumber + 1

  return (
    <div>
      <h1>Questionnaire</h1>
      <p>{questionNumber}</p>
      <Link to={`/survey/${previousQuestionNumber}`}>Précédent </Link>
      {Number(questionNumber) > 9 ? (
        <Link to="/results">Résultats </Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant </Link>
      )}
    </div>
  )
}

export default Survey
