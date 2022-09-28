import React from 'react'

function Navbar() {
  let userName = localStorage.getItem('username');

  return (
    <div>
      <p>Hello, {userName}</p>
    </div>
  )
}

export default Navbar