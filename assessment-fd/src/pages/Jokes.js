import * as React from 'react';
import Navbar from '../components/Navbar'
//import axios from 'axios';

function Jokes() {

    const [ anyJoke, setAnyJoke ] = React.useState([]);
    const [ anyPunJoke, setPunJoke ] = React.useState([]);
    const [ anyDarkJoke, setDarkJoke ] = React.useState([]);
    const [ anyProgJoke, setProgJoke ] = React.useState([]);


    React.useEffect(()=>{
        Promise.all([
            fetch('https://v2.jokeapi.dev/joke/Any?amount=10'),
            fetch('https://v2.jokeapi.dev/joke/Pun?amount=10'),
            fetch("https://v2.jokeapi.dev/joke/Dark?amount=10"),
            fetch("https://v2.jokeapi.dev/joke/Programming?amount=10"),
        ]).then(function (responses) {
            // get all array from api
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            const allAny = data[0]
            const allPuns = data[1]
            const allDark = data[2]
            const allProg = data[3]

            setAnyJoke(allAny)
            setPunJoke(allPuns)
            setDarkJoke(allDark)
            setProgJoke(allProg)

            console.log(data)

            console.log(allAny.jokes[2])
            console.log(allAny.jokes[2].id)
            console.log(allAny.jokes[2].category)
            console.log(allAny.jokes[2].type)
            console.log(allAny.jokes[2].joke || allAny.jokes[2].setup + allAny.jokes[2].delivery)

        }).catch(function (error) {
            console.log(error);
        });
    },[])

  return (
    <div>
        <Navbar />
        
        <h1>
            Jokes List
        </h1>

        <ul>
            <li>
                
            </li>
        </ul>

    </div>
  )
}  

export default Jokes