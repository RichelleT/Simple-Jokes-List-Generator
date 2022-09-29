import * as React from 'react';
import Navbar from '../components/Navbar'
import axios from 'axios';

function Jokes() {

    const [anyJoke, setAnyJoke] = React.useState([])
    const [puns, setPuns] = React.useState([])
    const [darkJokes, setDarkJokes] = React.useState([])
    const [programmingJokes, setProgrammingJokes] = React.useState([])

    const fetchData = () =>{
        const anyJokeURL ='https://v2.jokeapi.dev/joke/Any?amount=10"'
        const punsURL ='https://v2.jokeapi.dev/joke/Pun?amount=10'
        const darkJokesURL ='https://v2.jokeapi.dev/joke/Dark?amount=10'
        const programmingJokesURL ='https://v2.jokeapi.dev/joke/Programming?amount=10'

        const getAny = axios.get(anyJokeURL)
        const getPuns = axios.get(punsURL)
        const getDark = axios.get(darkJokesURL)
        const getProg = axios.get(programmingJokesURL)

        axios.all([getAny, getPuns, getDark, getProg]).then(
            axios.spread((...allData) => {
                const allAny = allData[0].data
                const allPuns = allData[1].data
                const allDark = allData[2].data
                const allProg = allData[3].data

                setAnyJoke(allAny)
                setPuns(allPuns)
                setDarkJokes(allDark)
                setProgrammingJokes(allProg)

                console.log(allAny.jokes)
                console.log(allAny.jokes[2])
                console.log(allAny.jokes[2].id)
                console.log(allAny.jokes[2].category)
                console.log(allAny.jokes[2].type)
                console.log(allAny.jokes[2].joke || allAny.jokes[2].setup + allAny.jokes[2].delivery)      
            })
        )
    }

    React.useEffect(()=>{
        fetchData()
    }, [])

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