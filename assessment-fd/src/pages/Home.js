import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import BannerImage from '../assets/MoonlitAsteroid.jpg'
import Jokes from "./Jokes";

const Home = () => {    
    var landingImage = require('../assets/signin.png');

    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: ""
      })
    
    const [title, setTitle] = useState("")

    /* const [username, setName] = useState(""); */

    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(formData)
      } 
    
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
                            <input type="text" onChange={(e) => setFormData({...formData, username: e.target.value})} name="username" id="username" placeholder="Enter Name" /><br/><br/>
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