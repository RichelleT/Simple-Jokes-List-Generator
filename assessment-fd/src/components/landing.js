import React, { useState } from "react";
import '../Assets/Styles/landing.css'
import { useNavigate } from 'react-router-dom'
//import Jokes from "./jokes";
//import { Helmet } from "react-helmet";

const Landing = () => {
    var landingImage = require('../Assets/Images/signin.png')
    let navigate = useNavigate();
    const [username, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(`The name you entered was: ${username}`)
      }
    
      //const css = require('../Assets/Styles/landing.css').toString();

    return (
        <div>
            <div className='container mt-auto pt-auto'>
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
                    <div className='col-6'>
                        <img src={landingImage} alt="not found" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Landing