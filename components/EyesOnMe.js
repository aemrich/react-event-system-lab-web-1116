import React from 'react'

class EyesOnMe extends React.Component {
  constructor() {
    super()
    this.good = this.good.bind(this)
    this.hey = this.hey.bind(this)
  }

  good(){
    console.log("Good!")
  }

  hey(){
    console.log("Hey! Eyes on me!")
  }


  render () {
    return (
      <div>
      <button onBlur={this.hey} onFocus={this.good}></button>
      </div>
    )
  }
}

module.exports = EyesOnMe
