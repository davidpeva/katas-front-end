import React, { Component } from 'react'

export default class InputValue extends Component {
  render() {
    return (
        <>
        <label>{this.props.title}</label>
        <input 
        value={this.props.limit} 
        onChange={(event) => this.props.setLimit(event.target.value)}/>
        </>
    )
  }
}
