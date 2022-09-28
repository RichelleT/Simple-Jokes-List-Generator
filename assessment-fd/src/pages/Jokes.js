import * as React from 'react';
import Navbar from '../components/Navbar'

function Jokes() {
    
/*     const urls = [
        "https://v2.jokeapi.dev/joke/Any?amount=10", 
        "https://v2.jokeapi.dev/joke/Pun?amount=10",
        "https://v2.jokeapi.dev/joke/Dark?amount=10",
        "https://v2.jokeapi.dev/joke/Programming?amount=10",
      ];
      
      async function fetchAll() {
        const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
        let data1 = results[0]?.jokes;
        let data2 = results[1]?.jokes;
        let data3 = results[2]?.jokes;
        let data4 = results[3]?.jokes;
        console.log(data1)
        console.log(data2)
        console.log(data3)
        console.log(data4)
        console.log(results)
      }
      
      fetchAll(); */
/*     const dataSources = {
        group1: 'https://v2.jokeapi.dev/joke/Any?amount=10"',
        group2: 'https://v2.jokeapi.dev/joke/Pun?amount=10',
        group3: 'https://v2.jokeapi.dev/joke/Dark?amount=10',
        group4: 'https://v2.jokeapi.dev/joke/Programming?amount=10',
    }; */

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
        <p>
        </p>
        </h1>
    </div>
  )
} 

export default Jokes