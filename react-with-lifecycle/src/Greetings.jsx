//CLASE DEL 09-06-22
import React, { Component } from 'react'

export default class Greetings extends Component {
  //cuando agrego un metodo de ciclo de vida va por fuera de render en esta zona
  componentDidMount() {
    console.log('simula llamada a la api de star wars')
  }
  
  componentWillUnmount() {
    console.log('se va a remover el componente')
  }
  render() {
    return (
      <div>Saludos eres mayor de edad</div>
    )
  }
}
