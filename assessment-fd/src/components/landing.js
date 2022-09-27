import React from 'react'
import '../Assets/Styles/landing.css'

const Landing = () => {
    var landingImage = require('../Assets/Images/signin.png')
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
                        <label htmlFor='username'>Name</label>
                        <input type="text" name="username" id="username" placeholder="Username" /><br/>
                        <button className='signin-button' type='submit'>Sign In</button> <br/>                   
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