import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const DivContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction1},
    ${props => props.color1},
    ${props => props.color2}
  );
  padding: 20px;
  height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Para = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Button = styled.button`
  background-color: #00c9b7;
  border-width: 0px;
  width: 80px;
  height: 30px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;
`
