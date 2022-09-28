import * as React from 'react';
import Navbar from '../components/Navbar'

function Jokes() {
    React.useEffect(()=>{
        Promise.all([
            fetch('https://v2.jokeapi.dev/joke/Any?amount=10'),
            fetch('https://v2.jokeapi.dev/joke/Pun?amount=10'),
            fetch("https://v2.jokeapi.dev/joke/Dark?amount=10"),
            fetch("https://v2.jokeapi.dev/joke/Programming?amount=10"),
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // Log the data to the console
            // You would do something with both sets of data here
            console.log(data);
            console.log(data.jokes)
        }).catch(function (error) {
            // show error if any
            console.log(error);
        });
        },[]) 

  return (
    <div>
        <Navbar />
        <h1>
            Jokes List
            <ul>

            </ul>
        </h1>
    </div>
  )
} 

export default Jokes