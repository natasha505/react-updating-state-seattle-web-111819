import React from 'react';

class ClickityClick extends React.Component {

  constructor() {
    super();
    this.state = {
      hasBeenClicked: false
    };
  }

  // handleClick = () => {
  //   this.setState({
  //     hasBeenClicked: true
  //   }, () => console.log(this.state.hasBeenClicked)) //TRUE!!! w optional callback fx
  //   // console.log(this.state.hasBeenClicked); // FALSE w/o callback fx
  // };
  handleClick = () => {
    this.setState(previousState => {
      return {
        hasBeenClicked: !previousState.hasBeenClicked
      }
    })
  }

  render() {
    return(
      <div>
        <p>
          I have {this.state.hasBeenClicked ? null : 'not'} been clicked!
        </p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}

export default ClickityClick;