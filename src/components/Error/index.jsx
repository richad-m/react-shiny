import ErrorImg from '../../assets/ErrorImg.svg'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  text-align: center;
  padding-top: 50px;
`

const ErrorText = styled.div`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
  text-align: center;
  padding-bottom: 10px;
`

const ErrorDraw = styled.img`
  width: 875px;
  height: 476px;
`
function Error() {
  return (
    <ErrorWrapper>
      <ErrorText>Oups...</ErrorText>
      <ErrorDraw src={ErrorImg} />
      <ErrorText>Il semblerait qu'il y ait un problème...</ErrorText>
    </ErrorWrapper>
  )
}

export default Error
