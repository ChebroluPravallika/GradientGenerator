import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {each, onChangeDirection, isActive} = props
  const {value, displayText} = each

  console.log(isActive)
  const onClickDirection = () => {
    onChangeDirection(value, each.directionId)
  }

  return (
    <li>
      <Button onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </Button>
    </li>
  )
}

export default GradientDirectionItem
