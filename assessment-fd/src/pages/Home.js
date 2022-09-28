import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import BannerImage from '../assets/MoonlitAsteroid.jpg'

const Home = () => {    
    var landingImage = require('../assets/signin.png');

    let navigate = useNavigate();

    const [username, setName] = React.useState();
    
    React.useEffect(() => {
        localStorage.setItem('username', username);
      }, [username])

    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(`Hello, ${username}.`)
         navigate('/jokes')
    }   

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
      setName(event.target.value);
    };

  return (
    <div style={{ backgroundImage: `url(${BannerImage})`,backgroundRepeat:"no-repeat",height:"100%", width:"100%", position:"fixed"}}>
        <div className='container mt-custom pt-auto'>
            <div className='row d-flex justify-content-center'>
                <div className='col-6'>
                    <div className='container-head'>
                        <br/>
                        <h1 className='align-center'>Sign In</h1>
                    </div>
                    <div className='container-body'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='username'>Name</label>
                            <input type="text" value={username} onBlur={handleBlur} 
                            style={style(error)} ref={ref} 
                            onChange={handleChange} onFocus={handleFocus} 
                            name="username" id="username" placeholder="Enter Name" 
                            pattern=".{4,}" required/>
                            {showErrorText && (
                              <p role="alert" style={{color: "rgb(255, 0, 0)" }}>
                                Please make sure you enter more than 4 letters
                              </p>
                            )}
                            <br/><br/>
                            <button className='signin-button' style={{marginLeft:"auto", position:"absolute"}} type='submit'>Sign In</button> <br/> 
                        </form> 
                    </div>
                </div>
                <div className='imgCol col-6'>
                    <img src={landingImage} alt="not found" />
                </div>
            </div>
        </div>
    </div>
  )
}  

export default Home