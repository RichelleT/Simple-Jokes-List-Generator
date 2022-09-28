import React from 'react'
import "../styles/Navbar.css";

function Navbar() {
  let userName = localStorage.getItem('username');

  return (
    <nav className="navbar-custom" style={{backgroundColor: "#e3f2fd"}}>
      <div className='span-right'>
        <span>Jokes</span>
      </div>
      <div className='span-left'>
        <span>Hello, {userName}!</span>
      </div>
    </nav>
  )
}

export default Navbar