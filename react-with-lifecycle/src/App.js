//CLASE DEL 09-06-22
//LOS COMPONENTES MAS IMPORTANTES Q SE USAN SON 
//componentDidMount-componentDidUpdate-componentWillUnMount

//en el component didMount y en el WillUnmount van sin paramentros los ()
//pero en el Update si va porq tengo props y states

//las apis por ejemplo se consumen desde el DIDMOUNT porque solo se cargan una vez
import { Component } from "react";
import './App.css';
import Greetings from "./Greetings";
import NoAccess from "./NoAccess";
import Teenager from "./Teenager"
import axios from "axios";
import CharacterCard from "./CharacterCard";


class App extends Component {
  state = {
    name: 'David',
    age: 33,
    peopleList: [],
    characterId: 0,
    name1: null
  }
  //esta es la parte de de Mounting al final luego de renderizar verifica si el componente se monto
  componentDidMount() {
    console.log('se ejecuta una vez');
    //aca pego la api en string
    //el get es para recuperar la info
    axios
    //aca esto regresa una promesa la manejo con el then y el catch
    .get('https://swapi.dev/api/people')
    //aca el resolve es una palabra q yo ponto hace referencia al arreglo del api para poder acceder
    .then((resolve) => {
      console.log(resolve.data.results)
      //enm esta linea ya lo mande arriba al estado y lo puedo llamar en render
      this.setState({peopleList: resolve.data.results})
      })
    .catch(error => console.error('error', error))
  }
  //el parametro que mando en este se pone por el event
  handleInputValue(inputParam) {
    //esta convencion de string y valor me sirve para tener orden en los
    //consolelogs q haga y saber de donde viene cada uno
    console.log('inputParam', inputParam);
    //aca voy a setear el estado para que cambie
    this.setState({age: inputParam})
  }
  //RENDERIZADO POR MEDIO DE CONDICION IF--JS desde funcion
  //CON LOS CONDICIONALES REMPLAZO ESTA FUNCION 
  //es simplemente un of pero regreso codigo html(COMPONENTE)
  //creo esta funcion q me da codigo html cuando la llamo me meustra en pantalla
  // showAgeInfo() {
  //   if (this.state.age >= 18) {
  //     return <Greetings/>
  //   }else{
  //     return <NoAccess/>
  //   }
  // }

  //ESTA ES LA FUNCION PARA EL ONCLICK
  selectCharacter(id) {
    console.log('id', id);
    //Vamos a setear el id
    //aca tuve que poner el callback del console para q espere q primero se setee el nuevo arreglo de characther selected
    this.setState({...this.state, characterId: id}, () => console.log('state', this.state))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <p>Hoy veremos ciclo de vida y renderizado condicional</p>

            <label>Componente 1</label>
            <input 
            value={this.state.age}
            //cuando manejo un evento como un dropdown o cosas asi uso el prefijo handle
            //handleInputValue es una funcion que cree para usar en este metodo
            onChange={(event) => this.handleInputValue(event.target.value)}/>
            {/* RENDERIZADO DESDE E JSX */}
            {/* CONDITIONAL IF el operador corrosco quiere decir si se cumple muestra es el if */}
            {/* {this.state.age >= 18 && <Greetings/>} */}
            {/* SINTAXIS DEL TERNARIO IF--ELSE ...condicion ? verdadero - ejecuta esto : falso va a ejecutar esto */}
            {/* {this.state.age >= 18 ? <Greetings/> : <NoAccess/>} */}
            {/* SINTAXIS TERNARIO IF--ELSE IF--ELSE */}
            {/* condicion ? verdadero eje esto : condicion ? verdadero eje esto : falso eje esto */}
            {this.state.age >= 18 ? <Greetings/> : this.state.age >= 10 ? <Teenager/> : <NoAccess/>}
            
            {/* ACA ES EL EJERCICIO DE SOLO MOSTRAR EL NOMBRE */}
            <h3>Lista de Personajes</h3>
            {
              this.state.peopleList.length === 0 ? (
                //ESTE CODIGIDO ES EL HTML DEL LOADER HTML Q SAQUE DE GOOGLE
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              ) : (
                <ul>
                  {this.state.peopleList.map((value, index) =>
                  //aca concatene nomal en el html lo que queria que mostrara los 2 puntos solo son stings
                  //el style aca lo trabajo como un pbjeto cursor es el key pointer el value
                  //por eso tengo doble {{}}
                  <li key={index}
                      style={{cursor: 'pointer', color: 'red'}}
                      //con la funcion flecha prevengo q cuando cargue la pagina se ejecute si no que solo cuando le de click se active, esto se hace cuando en el onclick paso un parametro
                      //el index mas 1 es para q me empiece el id en uno (los piedo sumar asi porq el index es un numero)
                      onClick={() => this.selectCharacter(index + 1)}
                      >{value.name} : {value.gender}</li>
                  )}
                </ul>
              )}
                       {/* aca defino el prop para q me muestre */}
                {/* condicional IF*/} 
                {this.state.characterId > 0 && (
            <CharacterCard id={this.state.characterId} userName={this.state.name}/>
          )}
        </header>
      </div>
    );
  }
}

export default App;
