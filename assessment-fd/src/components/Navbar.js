import React from 'react'
import "../styles/Navbar.css";

function Navbar() {
  let userName = localStorage.getItem('username');

  return (
<nav className="navbar navbar-light justify-items-between" style={{backgroundColor: "#e3f2fd"}}>
  <div className="container-fluid">
    <span className="navbar-brand">Jokes</span>
    <span className="navbar-brand">Welcome, {userName}!</span>
  </div>
</nav>
  )
}

export default Navbar