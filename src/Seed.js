import React, { Component } from 'react'

export default class Seed extends Component {
  handleClick() {
    // do something
  }

  render() {
    return <div className="zent-seed" onClick={() => this.handleClick}>Zent Seed</div>
  }
}
