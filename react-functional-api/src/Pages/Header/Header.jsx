//clase del 20/06/22
import React from 'react'

import { Link } from 'react-router-dom'

import './header.css'

export default function Header() {
  return (
    <nav>
        <ul className='nav-links'>
            <Link to='/'>
                <li>Home</li>
            </Link>|{""}
            <Link to='user-screen'>
                <li>User Screen</li>
            </Link>
        </ul>
    </nav>
  )
}
