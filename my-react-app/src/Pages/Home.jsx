//CLASE DEL 07-06-22
//CLASE DEL 02-05-22 y el 06-05-22

//ACA IMPORTO EL BOTON normalmente los import tienen un orden por ej primero lo de react, luego los propios y de ultimo los externos 

//REACT ESTO ME LO TRAJE DEL CLASS BASE COMPONENT PARA DARLE MAS ORDEN PONERLO DE PRIMERO
import React, { Component } from 'react';
//PROPIOS
import Button from '../components/Button';
import InputValue from '../components/InputValue';
//EXTERNOS
import logo from '../logo.svg';
import '../App.css';


//ESTE ERA UN FUNCTIONAL COMPONENT Y LO VOY A CAMBIAR A CLASS BASE COMPONENT
//function App() {
//return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
      //<h3>Contador</h3>
      //</header>
    //</div>
//);
//}
//esto lo borre al crear el class
//export default App;


//ASI ERA COMO SE USABA ANTES con las palabras THIS AHORA LO VOY A HACER CON FUNCIONES FLECHA Y SIN LOS BIND
//ESTE ES UN CLASS BASE COMPONENT SE SACA POR EL SINEPT COMOO EMMET COMANDO RCC
export default class Home extends Component {
  //con este constructor inizializo el componente
  //constructor() {
    //con super llamo las funciones que vienen de Component
    //super();
    //aca creamos nuestro estado
    //this.state = {
      //con this state cree un objeto que contiene la variable contador para usarla abajo se declaro en 0
      //contador: 0,
      //aca este estado limiteSuperior y limiteInferior lo relaciono con el valu de input para que quede dinamico
      //limiteSuperior: 10,
      //limiteInferior: 3
    //};
    //EL BIND ES COMO PARA PODER USAR LAS FUNCIONES DE AFUERA EN ESE SCOPE COMO QUE ME LAS TRAE PORQUE LAS CREE POR FUERA
    //aca le digo al contador que en el conclick mande esta variable como objeto
    //en realidad el onclick recibe es esta variable que con bind uni con la variable aunmentarContador para usarla abajo
    //this.aumentarContador = this.aumentarContador.bind(this);
    //ESTE THIS DE ABAJO LO COMENTE PORQUE CON LA FUNCION FLECHA DE ABAJO LO REEMPLAZO CON LA ACTUALIZACION DE JS6
    //la funcion flecha la quite porque ya el boton lo pase a un componente
    //this.decrecerContador = this.decrecerContador.bind(this);
    //this.setUpperLimit = this.setUpperLimit.bind(this)
    //this.setLowerLimit = this.setLowerLimit.bind(this)
  //}

  //DE ESTA FORMA SE HACE LO NUEVO, PERO DEBO DEFINIR LAS FUNCIONES EN ARROW FUNCTION
  //al cambiarlo a arrow no necesito el function y el bind
  state = {
    //con this state cree un objeto que contiene la variable contador para usarla abajo se declaro en 0
    contador: 0,
    //aca este estado limiteSuperior y limiteInferior lo relaciono con el valu de input para que quede dinamico
    limiteSuperior: 10,
    limiteInferior: 3,
    mensajes: []
  };

  //Con esta funcion hago el contador dinamico
  aumentarContador = () => {
    //setState es una funcion interna funciona aunque no este declaradad
    //aca tengo que mandarle a set state un objeto porque arriba era 0 y ya aca quiero que cambie es
    //LA VALIDACION DE MENOR Y MAYOR LA HICE YO
    //con this.state.limiteSuperior ya es dinamico
    if(this.state.contador < this.state.limiteSuperior){
    this.setState({contador: this.state.contador + 1});
    }else{
      this.setState({
        //aca me traigo y me deja iguales el estado de como estaba con el spread operator
        ...this.state,
        //aca con el espread no me toca los mensajes anteriores y me agrega uno nuevo
        mensajes: [...this.state.mensajes, `El limite superior es ${this.state.limiteSuperior}`]
      })
    }
  }
  //esta la hice yo
  decrecerContador = () => {
    if(this.state.contador > this.state.limiteInferior){
    this.setState({contador: this.state.contador - 1});
    }else{
      //con este como q instancio los estados para cambiarlos 
      this.setState({
        //aca me traigo y me deja iguales el estado de como estaba con el spread operator
        ...this.state,
        //aca con el espread no me toca los mensajes anteriores y me agrega uno nuevo
        mensajes: [...this.state.mensajes, `El limite inferior es ${this.state.limiteInferior}`]
      })
    }
  }

  //aca estoy creando una funcion para el onChange del input
  setUpperLimit = (upperLimit) => {
    //aca uso el ...(spread operator) para que suba a los estados y me ignore el estado contador y el limiteInferior para solo usar el limsupe
    //asi en esta funcion llamo es el valor que quiero cambiar (upperLimit)
    this.setState({...this.state, limiteSuperior: upperLimit})

  }
  setLowerLimit = (lowerLimit) => {
    this.setState({...this.state, limiteInferior: lowerLimit})
  }


  //abajo en el p llame el this state para que me muestre el 0 en pantalla
  //en el input en el onChange como es un evento debo de ponerle q al principio la funcion flecha para decirle q estoy llamando ese evento
  //al del input en el event.target.value le digo q de el evento solo quiero el VALUE
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h3>Contador</h3>

        <InputValue 
        limit={this.state.limiteSuperior}
        setLimit={this.setUpperLimit} 
        title='Limite Superior'
        />
        <InputValue 
        limit={this.state.limiteInferior}
        setLimit={this.setLowerLimit} 
        title='Limite Inferior'
        />
        
        <p>{this.state.contador}</p>
        <Button manejarClick={this.aumentarContador} title='Incrementar'/>
        <br></br>
        <Button manejarClick={this.decrecerContador} title='Decrecer'/>
        
        {this.state.mensajes.map(mensaje => (
          <p> {mensaje} </p>
        ))}
        </div>
      </div>
    )
  }
}

//EN EL THIS.STATE.MENSAJES.MAP, el map me devuelve el elemento especifico del arreglo al ajecutar el CALLBACK q es donde esta mensaje para poderlo mostrar en html es porque me estoy trayendo un arreglo y lyego con la funcion mensaje flecga le digo q me cree un P con ese mensaje



