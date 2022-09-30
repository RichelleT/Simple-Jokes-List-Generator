import * as React from 'react'
import "../styles/Navbar.css";

function Navbar() {
  let userName = localStorage.getItem('username');
 //update name
/*   const [username, setNewName] = React.useState(userName);
  const handleChange = e => {
    localStorage.setItem("username", e.target.value);
    setNewName(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
     console.log(`Hello, ${username}.`)
  }  */
  //modal

  return (
    <nav className="navbar-custom" style={{backgroundColor: "#e3f2fd"}}>
      <div className='span-right'>
        <span>Jokes</span>
      </div>
      <div className='span-left'>
        <span>Hello, {userName}!</span>
      </div>
          {/* <form onSubmit={handleSubmit}>
            <label>
              <span>Rename</span>
              <input type="text"
              rows="10"
              placeholder="Rename your username"
              value={userName}
              onChange={handleChange}
              required
              />
              <button type='submit'>Update Name</button> <br/> 
            </label>
          </form> */}
    </nav>
  )
}

export default Navbar