import { useParams } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  return (
    <div>
      <h1>Questionnaire</h1>
      <p>{questionNumber}</p>
    </div>
  )
}

export default Survey
