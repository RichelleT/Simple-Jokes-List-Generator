import * as React from 'react';
import Navbar from '../components/Navbar'

function Jokes() {

    const allJ = fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
    const pun = fetch("https://v2.jokeapi.dev/joke/Pun?amount=10")
    const dark = fetch("https://v2.jokeapi.dev/joke/Dark?amount=10")
    const joke = fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")

    

/*     const urls = [
        "https://v2.jokeapi.dev/joke/Any?amount=10", 
        "https://v2.jokeapi.dev/joke/Pun?amount=10",
        "https://v2.jokeapi.dev/joke/Dark?amount=10",
        "https://v2.jokeapi.dev/joke/Programming?amount=10",
      ];
      
      async function fetchAll() {
        const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
        console.log(JSON.stringify(results, null, 2));
      }
      
      fetchAll(); */

/*     React.useEffect(()=>{
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
            // You would do something with both sets of data here
            //console.log(data);
        }).catch(function (error) {
            // displays error if any
            console.log(error);
        });
        },[])  */  

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