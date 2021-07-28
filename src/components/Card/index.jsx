import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/color'

//Styled components definitions

const CardLabel = styled.span`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #5843e4;
  margin-bottom: 30px;
`
const CardImage = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 90px;
  margin-bottom: 30px;
`
const CardTitle = styled.span`
  width: 210px;
  height: 28px;
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
`

const CardWrapper = styled.div`
  display: flex;
  padding-top: 100px;
  background: #f9f9fc;
  border-radius: 30px;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Titre par défaut',
  label: 'Label par défaut',
  picture: DefaultPicture,
}
export default Card
