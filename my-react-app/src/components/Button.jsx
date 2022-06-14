//CLASE DEL 06-06-22 

import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        //al poner this.props el ya sabe q la funcione esta en el padre y aca la va a disparar
        //el this.props.title me ayudara a que el value de el boton lo pueda modificar yo como coder dinamicamente desde el padre
        //el manejarclick es una propiedad que me invente para hacerlo dinamico en el padre
        <button onClick={this.props.manejarClick}>{this.props.title}</button>
    )
  }
}
