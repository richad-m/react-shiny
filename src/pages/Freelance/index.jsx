import Card from '../../components/Card/index'
import styled from 'styled-components'
import Loader from '../../utils/Atoms'
import { useState, useEffect } from 'react'

const CardContainer = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 60%;
  display: grid;
  gap: 24px;
  grid-template-rows: 339px 334px;
  grid-template-columns: repeat(2, 1fr);
`
const Container = styled.div`
  width: 100%;
`

const TitleText = styled.div`
  font-family: Trebuchet MS;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 30px;
`

const SubTitleText = styled.div`
  font-family: Trebuchet MS;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: #8186a0;
  margin-bottom: 30px;
`

function Freelances() {
  const [freelancersList, setFreelancerList] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/freelances`).then((response) =>
      response
        .json()
        .then(
          ({ freelancersList }) => setFreelancerList(freelancersList),
          setDataLoading(false)
        )
        .catch((error) => console.log(error))
    )
  }, [])
  return (
    <Container>
      <TitleText>Trouvez votre prestataire</TitleText>
      <SubTitleText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitleText>
      {isDataLoading ? (
        <Loader></Loader>
      ) : (
        <CardContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardContainer>
      )}
    </Container>
  )
}

export default Freelances
