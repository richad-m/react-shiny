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
  background: red;
  display: grid;
  gap: 24px;
  grid-template-rows: 300px 300px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  return (
    <div>
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
