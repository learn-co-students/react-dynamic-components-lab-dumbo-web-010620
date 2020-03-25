import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if(this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1 } />
        </div>
      )
    } else {
      return null
    }
  }
}

    // TRY 2
    // const newOpacity = this.props.opacity - .1
    // console.log(this.props.opacity)
    // return this.props.opacity < .2 ? null : ( 
    //   <div className="color-box" style={{opacity: newOpacity}}> </div>
    // )


      // TRY 1
      // <div className="color-box" style={{opacity: this.props.opacity}}>
      //   {this.props.opacity > .2 ? 
      //     this.render() && this.props.opacity -= .1 
      //     : this.render() => {return null} 
      //     }
      // </div>