//CLASE 14-06-22
import React, { Component } from 'react'   

export default class InfoExtra extends Component {
    render() {
    return (
        <>
        <h3>Info Extra en componente nieto</h3>
        <p>Este es el valor desde el abuelo App.js {this.props.userInApp}</p>
        
        {/* EJERCICIO
        Pasar desde app.js los valores de  */}
        {/* repetir la clase del 15 la primera media hora */}
        </>
    )
    }
}
