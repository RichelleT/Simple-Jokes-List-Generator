import * as React from 'react';
//import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css';
import BannerImage from '../assets/MoonlitAsteroid.jpg'
//import Jokes from "./Jokes";

/* class Home extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('Hello, ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  } */

const Home = () => {    
    var landingImage = require('../assets/signin.png');

    let navigate = useNavigate();

    const [username, setName] = React.useState(JSON.parse(localStorage.getItem('username')) || []);
    
    React.useEffect(() => {
        localStorage.setItem('username', username);
      }, [username])

    const handleSubmit = (event) => {
        event.preventDefault();
         console.log(`Hello, ${username}.`)
         navigate('/jokes')
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
                            <input type="text" value={username} onChange={(e) => setName(e.target.value)} name="username" id="username" placeholder="Enter Name" /><br/><br/>
                            {/* <input type="text" value={formData.username} onChange={handleInput} name="username" id="username" placeholder="Enter Name" /><br/><br/> */}
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