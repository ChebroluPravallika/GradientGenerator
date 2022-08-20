import {Component} from 'react'
import {Heading, Para, DivContainer, Button} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    color1: '#8ae323',
    color2: '#014f7b',
    details: {
      direction1: 'top',
      colorA: '#8ae323',
      colorB: '#014f7b',
    },
    activeBtnId: gradientDirectionsList[0].directionId,
  }

  onChangeDirection = (value, id) => {
    this.setState({direction: value, activeBtnId: id})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    const {direction, color1, color2} = this.state
    const options = {
      direction1: direction,
      colorA: color1,
      colorB: color2,
    }
    console.log(direction, options)
    this.setState({details: options})
  }

  render() {
    const {color1, color2, details, activeBtnId} = this.state
    console.log(details.direction1)
    return (
      <div style={{}}>
        <DivContainer
          data-testid="gradientGenerator"
          direction1={details.direction1}
          color1={details.colorA}
          color2={details.colorB}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <ul
            style={{display: 'flex', flexDirection: 'row', listStyle: 'none'}}
          >
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                each={each}
                key={each.directionId}
                onChangeDirection={this.onChangeDirection}
                activeBtnId={activeBtnId}
                isActive={activeBtnId === each.directionId}
              />
            ))}
          </ul>
          <Para>Pick the Colors</Para>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Para>{color1}</Para>
              <input
                type="color"
                onChange={this.onChangeColor1}
                value={color1}
                style={{
                  height: '30px',
                  width: '60px',
                  marginRight: '10px',
                  padding: '0px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '40px',
              }}
            >
              <Para>{color2}</Para>
              <input
                type="color"
                onChange={this.onChangeColor2}
                value={color2}
                style={{
                  height: '30px',
                  width: '60px',
                  padding: '0px',
                }}
              />
            </div>
          </div>
          <Button onClick={this.onClickGenerate}>Generate</Button>
        </DivContainer>
      </div>
    )
  }
}

export default GradientGenerator
