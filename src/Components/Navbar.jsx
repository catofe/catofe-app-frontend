import React, {useState} from 'react'
import './Navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      <a href='/' className='navbar-logo'>Catofe</a>
      <ul>
        <li><a href="/" className='active'>Home</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/">Order</a></li>
        <li><a href="/">Reservation</a></li>
        <li><a href="/">Profile</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
