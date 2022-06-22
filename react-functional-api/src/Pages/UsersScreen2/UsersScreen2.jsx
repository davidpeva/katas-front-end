//clase del 16/06/22

//buscar todos los links para agregarlos a mi pagina de excel
// reactrouter.com


//para escuchar el uno o el otro uso useEffect ya con los[] y que va adentro del callback defino q esta escuchando
//aca en functional components el
//did mount es cuando uso el [] vacio
//el will unmount cuando uso el [] vacio pero adentro hay un return
//el willupdate es cuando uso [condatos] con datos adentro 

//los props llegan de afuera a un componente
//los states son los que maneja cada componente internamente

//para mandar algo del hijo al padre lo hago por props 
//y se manda en el parametro de la arrow f de el export
import axios from 'axios'
import { useEffect, useState } from 'react'
import logo from '../../Assets/logo.svg'
import './UsersScreen2.css'

//aca debo de poner las dos cosas que estoy enviando y recibiendo en  el callback en el destructuring
export const UsersScreen2 = ({senIdUser, nameProp}) => {

  const [users, setusers] = useState([])

  const getUsers = async() => {
    try{
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setusers(res.data);
    }catch(error){
      console.log('error API', error); //aca le hago catch a los errores porq con async await no lo hice por eso uso el try y el catch
    }
  }

  //los hooks van aca y nunca pueden estar dentro de un condicional
  useEffect(() => {
    getUsers()
  },[])

  //aca esta llgando el nameprop del padre
  useEffect(() => {
    console.log('nameProp', nameProp)
  },[nameProp])
  
  //para mandar al padre se hace por props por medio de eventos por ejemplo el metodo onclick
  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {
        users.map(user => (
        <p key={user.id} onClick={() => senIdUser(user.id)}>{user.name}</p>))
      }
    </div>
  )
}



//este es el ejercicio a hacer que pusieron el viernes antes de empezar la clase
// Mostrar la siguiente información en un  componente de de react, consumir la API de github 
// https://api.github.com/repos/facebook/react/issues

// Son bugs detectados en la lib de react en formato JSON.

// Debes de mostrar en una lista:

// title
// user - id
// user - repos_url
// user - avatar_url
// labels - name (Solamente el primer elemento) 
// labels - color (Solamente el primer elemento) 

// PS. Puedes usar el último proyecto que vimos en clase y solo crear un nuevo componente para mostrar la info solicitada.




