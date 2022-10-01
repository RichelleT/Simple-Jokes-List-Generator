import * as React from 'react';
import Navbar from '../components/Navbar'
import '../styles/JokesList.css'
import axios from 'axios';
import "bootstrap-icons/font/bootstrap-icons.css";
import FavouriteList from './FavouriteList';

export default function JokesList() {

    React.useEffect(() => {
        JokesListF();
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

    //add joke to fav list
    const addFav = (event, listItem) => {
        event.preventDefault()
        setFavourite([listItem, ...addFavourite])
      }

    console.log(addFavourite)
    console.log('^ add favourite ^')

    //remove joke from fav list
    const remFav = (e, listItem) => {
        e.preventDefault()
        console.log(listItem)
        var tempArray = [...addFavourite];
        if (listItem !== -1) {
            tempArray.splice(listItem, 1);
            setFavourite(tempArray);
            console.log(addFavourite)
            console.log('^ remove favourite ^')
          }
    }

    //try modal
    const [isOpen, setIsOpen] = React.useState(false)
      
    return (
        <div>
            <Navbar />
            
            <div className='container'>
                <br/>
                <h1>Jokes List</h1><br/>
                <div className='container2'>
                    <div className='container-right'>
                        <label className='cont2sel custLabel'>Select Joke Category</label><br/>
                        <select className='cont2sel'
                            onChange={(event) => setSelectedCategory(event.target.value)}
                        >
                            <option value='all' selected>All</option>
                            <option value='misc'>Misc</option>
                            <option value='pun'>Pun</option>
                            <option value='programming'>Programming</option>
                            <option value='dark'>Dark</option>
                            <option value='spooky'>Spooky</option>
                            <option value='christmas'>Christmas</option>
                        </select><br/><br/>
                    </div>
                    <div className='btnWrap container-left'>
                        {!isOpen &&
                            <button className='cont2button'
                        onClick={() => setIsOpen(true)}
                        >
                            Favourite Jokes
                        </button>
                        }<br/><br/>
                        <button className='cont2button' onClick={() => JokesListF()}>Refresh List</button><br/><br/>
                    </div><br/><br/>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Favourite</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Setup</th>
                            <th>Delivery</th>
                            <th>&nbsp;</th>
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
                                <button id={listItem.id} 
                                onClick={(e) => remFav(e, listItem)}
                                >
                                    <i class="bi bi-suit-heart-fill"></i>
                                </button>
                                }
                            </td>
                            <td>{ listItem.id }</td>
                            <td>{ listItem.category }</td>
                            <td colSpan={listItem.joke && '2'}>{listItem.joke || listItem.setup}</td>
                            <td colSpan={listItem.delivery && '2'}>{listItem.delivery}</td>
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
                                onClick={(e) => remFav(e, listItem)}
                                >
                                    <i class="bi bi-suit-heart-fill"></i>
                                </button>
                                }
                            </td>
                            <td>{ listItem.id }</td>
                            <td>{ listItem.category }</td>                            
                            <td colSpan={listItem.joke && '2'}>{listItem.joke || listItem.setup}</td>
                            <td colSpan={listItem.delivery && '2'}>{listItem.delivery}</td>
                        </tr>
                    );
                    })}
                    </tbody>
                </table>
            </div>
            <FavouriteList open={isOpen} onClose={() => setIsOpen(false)}>
                <h1>Favourite Jokes List</h1><br/>
                <div>
                <table>
                    <thead>
                        <tr>
                            <th>Favourite</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Setup</th>
                            <th>Delivery</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {addFavourite.map(listItem => {
                    return (
                    <tr key={listItem.id} id={listItem.id}>
                        <td>                                
                            <button id={listItem.id} 
                            onClick={(e) => remFav(e, listItem)}
                            >
                                <i class="bi bi-suit-heart-fill"></i>
                            </button>
                        </td>
                        <td>{ listItem.id }</td>
                        <td>{ listItem.category }</td>
                        <td colSpan={listItem.joke && '2'}>{listItem.joke || listItem.setup}</td>
                        <td colSpan={listItem.delivery && '2'}>{listItem.delivery}</td>
                    </tr>
                    );
                    })} 
                    </tbody>
                </table>
            </div>
        </FavouriteList>
        </div>
    ) 
}