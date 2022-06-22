//clase del 16/06/22
import { useEffect, useState } from 'react'
import logo from '../../Assets/logo.svg'
import './UsersScreen.css'


export const UsersScreen = () => {

  const [username, setusername] = useState('')

  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
  }
  //los hooks van aca y nunca pueden estar dentro de un condicional
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      console.log('componente desmontado');
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[])
  

  return (
    <div className="App App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <input value={username} onChange={(e) => setusername(e.target.value)}/>
    </div>
  )
}
