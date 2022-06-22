//clase del 16/06/22
import { UsersScreen2 } from "./Pages/UsersScreen2/UsersScreen2"
//aca se ve como le cambio el nombre al usersScreen y lo importp con el nuevo
import { UsersScreen as UserInput } from './Pages/UsersScreen/UsersScreen'

import Header from "./Pages/Header/Header"
import { Footer } from "./Pages/Footer/Footer"
import User from "./Pages/User/User"

//aca abajo estoy importando esas 3 dependencias de react router el as es como para ddarle sobrenombre
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'




const App = () => {
//aca abajo se ve como recibo el sendIduSER ahi se pone todo lo que quiero rercibir
//el nameprop es mandando algo del padre al hijo por medio de props  
return (
    //1.Definir como wrapper general de todos mis componentes a BrowserRouter pero como le ccambien el nombre uso Router por el as
    <Router>
      {/* aca ya importe el nuevo archovo de pages Header */}
      <Header/>
      {/*2. indica los componentes que van aa trabajar como rutas de direccionamiento */}
      <Routes>
        {/* 3.definir las rutas, tenemos 2 props path y element (cuando entre al path mostrar ese elemento) */}
        <Route 
        path='/' 
        element={
        <UsersScreen2 
        senIdUser={(id) =>(console.log('id desde componente hijo', id))} 
        nameProp='viernes'/>
         }
        />  
        <Route path='user-screen' element={<UserInput/>}>
          <Route path=':id' element={<User/>}/>
          </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
