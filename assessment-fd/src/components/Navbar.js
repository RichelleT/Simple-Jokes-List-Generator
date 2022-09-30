import * as React from 'react'
import "../styles/Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Modal from './renameModal';

function Navbar() {
  //modal
  const [isOpen, setIsOpen] = React.useState(false)

  //get username
  let userName = localStorage.getItem('username');

 //update name
  const [username, setNewName] = React.useState(userName);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false)
    //console.log(`Hello, ${username}.`)
  }

  //update name validation
  const [error, setError] = React.useState(false);
  const [showErrorText, setShowErrorText] = React.useState(false);
  const ref = React.useRef(); 

  const handleBlur = (event) => {
    if (!error) {
      if (event.target.validity.patternMismatch) {
        ref.current.focus();
        setError(true);
        setShowErrorText(true);  
      }
    }
    if (error) {               
      setShowErrorText(false); 
    }                          
  };

  const handleFocus = () => {
    if (error) {
     setShowErrorText(true);
    }
  };

  function style(error) {
    if (error) {
      return {
        backgroundColor: "rgba(255, 0, 0, 0.5)" 
      };
    }
  }

  const handleChange = (event) => {
    const newValueIsValid = !event.target.validity.patternMismatch;
    if (error) {
      if (newValueIsValid) {
        setError(false);
        setShowErrorText(false);
      }
    }
    if (event.target.value.length > 3 && event.target.value.length < 16) {
      setNewName(event.target.value);
      console.log(`new username, ${username}.`)
    }
  };

React.useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]) 
  
  return (
    <nav className="navbar-custom">
      <div className='span-right'>
        <a href='/' style={{textDecoration:"none"}}>
          <span>Jokes</span>
        </a>
      </div>
      <div className='span-left'>
        <span>Hello, {userName}!&nbsp;</span>

        <div className='btnWrap'>
          <button className='iconBtn'
          onClick={() => setIsOpen(true)}
          >
            <i class="bi bi-pencil-square fs-5"></i>
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Enter new name</span>
                <br/>
                <input type="text" placeholder="Name"
                onBlur={handleBlur} style={style(error)} ref={ref} 
                onChange={handleChange} onFocus={handleFocus}
                pattern=".{4,15}" required/>
                {showErrorText && (
                  <p role="alert" style={{color: "rgb(255, 0, 0)" }}>
                    Please make sure username is between 4 and 15 characters.
                  </p>
                )}
                <br/><br/>
                <button type='submit' className='updBtn'>Update Name</button> <br/> 
              </label>
            </form>
            </Modal>
        </div>
      </div> 
    </nav>
  )
}

export default Navbar