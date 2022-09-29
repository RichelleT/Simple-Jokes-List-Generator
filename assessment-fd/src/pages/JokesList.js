import * as React from 'react';
import Navbar from '../components/Navbar'
import '../styles/JokesList.css'
import axios from 'axios';
//import Jokes from './Jokes'

export default function JokesList() {
    React.useEffect(() => {
        JokesListF();
      }, []);

    const [anyJoke, setAnyJoke] = React.useState([])
    const [puns, setPuns] = React.useState([])
    const [darkJokes, setDarkJokes] = React.useState([])
    const [programmingJokes, setProgrammingJokes] = React.useState([])

    const JokesListF = () => {
        let endpoints = [
            'https://v2.jokeapi.dev/joke/Any?amount=10',
            'https://v2.jokeapi.dev/joke/Pun?amount=10',
            'https://v2.jokeapi.dev/joke/Dark?amount=10',
            'https://v2.jokeapi.dev/joke/Programming?amount=10'
        ];
          
          // Return our response in the allData variable as an array
          Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: anyJoke}, {data: puns}, {data: darkJokes}, {data: programmingJokes}] )=> {
            
            const aj = anyJoke.jokes
            const ap = puns.jokes
            const ad = darkJokes.jokes
            const app = programmingJokes.jokes
            setAnyJoke(aj)
            setPuns(ap)
            setDarkJokes(ad)
            setProgrammingJokes(app)
          }
        );
    }

      return (
        <div>
            <Navbar />
            <div className='container'>
            <section>
            <h2>Any Jokes</h2>
            {anyJoke.length > 0 && (
              <div>
                {anyJoke.map((jokeAny) => (
                  <div key={jokeAny.id}>
                    <p>id: {jokeAny.id}, Category: {jokeAny.category}</p>
                    <p>joke: {jokeAny.joke || jokeAny.setup + jokeAny.delivery}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section>
            <h2>Puns</h2>
            {puns.length > 0 && (
              <div>
                {puns.map((punAny) => (
                  <div key={punAny.id}>
                    <p>id: {punAny.id}, Category: {punAny.category}</p>
                    <p>joke: {punAny.joke || punAny.setup + punAny.delivery}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section>
            <h2>Dark Jokes</h2>
            {darkJokes.length > 0 && (
              <div>
                {darkJokes.map((darkAny) => (
                  <div key={darkAny.id}>
                    <p>id: {darkAny.id}, Category: {darkAny.category}</p>
                    <p>joke: {darkAny.joke || darkAny.setup + darkAny.delivery}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
          <section>
            <h2>Programming Jokes</h2>
            {programmingJokes.length > 0 && (
              <div>
                {programmingJokes.map((progAny) => (
                  <div key={progAny.id}>
                    <p>id: {progAny.id}, Category: {progAny.category}</p>
                    <p>joke: {progAny.joke || progAny.setup + progAny.delivery}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
            </div>
        </div>
    ) 
}
  
/* function JokesList() {
  return (
    <div>JokesList</div>
  )
}

export default JokesList */