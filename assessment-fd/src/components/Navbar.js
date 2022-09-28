import React from 'react'

function Navbar() {
  let userName = localStorage.getItem('username');

  return (
    <div>
      Hello, {userName}
    </div>
  )
}

export default Navbar