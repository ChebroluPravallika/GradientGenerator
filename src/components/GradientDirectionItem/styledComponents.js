import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  width: 90px;
  background-color: #ffffff;
  border-width: 0px;
  margin-right: 10px;
  font-family: 'Roboto';
  opacity: ${props => (props.isActive === true ? 1 : 0.5)};
  border-radius: 5px;
  cursor: pointer;
`
