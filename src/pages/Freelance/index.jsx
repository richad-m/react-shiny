import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card/index'
import styled from 'styled-components'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
]

const CardContainer = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  width: 47%;
  display: grid;
  gap: 24px;
  grid-template-rows: 339px 334px;
  grid-template-columns: repeat(2, 1fr);
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
  return (
    <div>
      <TitleText>Trouvez votre prestataire</TitleText>
      <SubTitleText>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </SubTitleText>
      <CardContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardContainer>
    </div>
  )
}

export default Freelances
