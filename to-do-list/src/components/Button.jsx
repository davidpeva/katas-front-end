//CLASE DEL 08-06-22
import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <button 
          //este btn btn primary es del bootstrap buscar documentacion
          className='btn btn-primary'
          onClick={this.props.handleClick}
          type={this.props.type}
          >
          {this.props.title}
        </button>
    )
  }
}
