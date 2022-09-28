import React, { useState } from "react";
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import BannerImage from '../assets/MoonlitAsteroid.jpg'

const Home = () => {    
    var landingImage = require('../assets/signin.png');
    let navigate = useNavigate();
    const [username, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(`The name you entered was: ${username}`)
      }
    
  return (
    <div style={{ backgroundImage: `url(${BannerImage})`,backgroundRepeat:"repeat-y",height:"100%", width:"100%", position:"fixed"}}>
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
                            <input type="text" value={username} onChange={(e) => setName(e.target.value)} name="username" id="username" placeholder="Username" /><br/><br/>
                            <button className='signin-button' type='submit' onClick={()=>{navigate('/jokes')}}>Sign In</button> <br/> 
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