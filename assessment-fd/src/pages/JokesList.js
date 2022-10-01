import * as React from 'react';
import Navbar from '../components/Navbar'
import '../styles/JokesList.css'
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import FavouriteList from './FavouriteList';

export default function JokesList() {

    React.useEffect(() => {
        JokesListF();
        localStorage.setItem('favArray', addFavourite)
    }, []);

    const [anyJoke, setAnyJoke] = React.useState([])
    const [puns, setPuns] = React.useState([])
    const [darkJokes, setDarkJokes] = React.useState([])
    const [programmingJokes, setProgrammingJokes] = React.useState([]) 
    const [fullList, setList] =  React.useState([])

    const [selectedCategory, setSelectedCategory] = React.useState('')

    const filteredCategories = fullList.filter(list => list.category.toLowerCase() === selectedCategory.toLowerCase())
       
    const JokesListF = () => {
        let endpoints = [
            'https://v2.jokeapi.dev/joke/Any?amount=10',
            'https://v2.jokeapi.dev/joke/Pun?amount=10',
            'https://v2.jokeapi.dev/joke/Dark?amount=10',
            'https://v2.jokeapi.dev/joke/Programming?amount=10'
        ];
          
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{data: anyJoke}, {data: puns}, {data: darkJokes}, {data: programmingJokes}] )=> {
            const aj = anyJoke.jokes
            const ap = puns.jokes
            const ad = darkJokes.jokes
            const app = programmingJokes.jokes

            const joined = aj.concat(ap, ad, app);

            console.log("Show joined array in console.")
            console.log(joined)

            setAnyJoke(aj)
            setPuns(ap)
            setDarkJokes(ad)
            setProgrammingJokes(app)
            setList(joined)
          }
        ); 
    } 

    const [addFavourite, setFavourite] = React.useState([]);

    const addFav = (event, listItem) => {
        event.preventDefault()
        setFavourite([listItem, ...addFavourite])
      }

    console.log(addFavourite)
      
    return (
        <div>
            <Navbar />
            
            <div className='container'>
                <br/>
                <h1>Jokes List</h1><br/>
                <div>
                    <button onClick={() => JokesListF()}>Refresh List</button><br/><br/>
                    <select
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value='all' selected>All</option>
                        <option value='misc'>Misc</option>
                        <option value='pun'>Pun</option>
                        <option value='programming'>Programming</option>
                        <option value='dark'>Dark</option>
                        <option value='spooky'>Spooky</option>
                        <option value='christmas'>Christmas</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Favourite</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Setup</th>
                            <th>Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                    {filteredCategories.map(listItem => {
                        return (
                        <tr key={listItem.id} id={listItem.id}>
                            <td>
                            {
                                <button id={listItem.id} 
                                onClick={(event) => addFav(event, listItem)}
                                >
                                    <i class="bi bi-suit-heart"></i>
                                </button>
                                }
                                {
                                <button 
                                onClick={() => console.log('remove')}>
                                    <i class="bi bi-suit-heart-fill"></i>
                                </button>
                                }
                            </td>
                            <td>{ listItem.id }</td>
                            <td>{ listItem.category }</td>
                                <td>{listItem.setup || listItem.joke}</td>
                            {listItem.type = 'twopart' && 
                                <td>{listItem.delivery}</td>
                            }                    
                        </tr>
                    );
                    })}
                    {(!selectedCategory || selectedCategory === 'all') && fullList.map(listItem => {
                        return (
                        <tr key={listItem.id} id={listItem.id}>
                            <td>
                                {
                                <button id={listItem.id}
                                onClick={(event) => addFav(event, listItem)}
                                >
                                    <i class="bi bi-suit-heart"></i>
                                </button>
                                }
                                {
                                <button id={listItem.id} 
                                onClick={() => console.log('remove')}>
                                    <i class="bi bi-suit-heart-fill"></i>
                                </button>
                                }
                            </td>
                            <td>{ listItem.id }</td>
                            <td>{ listItem.category }</td>
                            <td>{listItem.setup || listItem.joke}</td>
                            {listItem.type = 'twopart' && 
                                <td>{listItem.delivery}</td>
                            }
                        </tr>
                    );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    ) 
}