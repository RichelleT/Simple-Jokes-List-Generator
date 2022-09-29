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
                <h1>All Jokes</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Favourite</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Joke</th>
                        </tr>
                    </thead>
                    <tbody>
                    {anyJoke.map(jokeAny => (
                        <tr key={jokeAny.id}>
                            <td>&nbsp;</td>
                            <td>{jokeAny.id}</td>
                            <td>{jokeAny.category}</td>
                            <td>{jokeAny.joke || jokeAny.setup + jokeAny.delivery}</td>
                        </tr>
                    ))}
                    {puns.map(punAny => (
                        <tr key={punAny.id}>
                            <td>&nbsp;</td>
                            <td>{punAny.id}</td>
                            <td>{punAny.category}</td>
                            <td>{punAny.joke || punAny.setup + punAny.delivery}</td>
                        </tr>
                    ))}
                    {darkJokes.map(darkAny => (
                        <tr key={darkAny.id}>
                            <td>&nbsp;</td>
                            <td>{darkAny.id}</td>
                            <td>{darkAny.category}</td>
                            <td>{darkAny.joke || darkAny.setup + darkAny.delivery}</td>
                        </tr>
                    ))}
                    {programmingJokes.map(progAny => (
                        <tr key={progAny.id}>
                            <td>&nbsp;</td>
                            <td>{progAny.id}</td>
                            <td>{progAny.category}</td>
                            <td>{progAny.joke || progAny.setup + progAny.delivery}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    ) 
}