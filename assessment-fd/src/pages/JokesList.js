import * as React from 'react';
import Navbar from '../components/Navbar'
import '../styles/JokesList.css'
import axios from 'axios';

export default function JokesList() {

    React.useEffect(() => {
        JokesListF();
      }, []);

    const [anyJoke, setAnyJoke] = React.useState([])
    const [puns, setPuns] = React.useState([])
    const [darkJokes, setDarkJokes] = React.useState([])
    const [programmingJokes, setProgrammingJokes] = React.useState([]) 
    const [fullList, setList] =  React.useState([])
    const [filteredList, setFilteredList] = React.useState(fullList);
    const [selectedCategory, setSelectedCategory] = React.useState("");

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

    const filterByCategory = (filteredData) => {
        if (!selectedCategory) {
          return filteredData;
        }
      
        const filteredCategory = filteredList.filter(
          (cate) => cate.name.split(" ").indexOf(selectedCategory) !== -1
        );
        return filteredCategory;
      };
    
    const handleCateChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    React.useEffect(() => {
        var filteredList = filterByCategory(fullList);
        setFilteredList(filteredList);
      }, [selectedCategory]);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1>All Jokes</h1>
                <select value={selectedCategory} onChange={handleCateChange}>
                    <option value="">All</option>
                    <option value="Misc">Misc</option>
                    <option value="Programming">Programming</option>
                    <option value="Pun">Pun</option>
                </select>
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
                    {fullList.map(listItem => {
                        return (
                        <tr key={listItem.id}>
                            <td>&nbsp;</td>
                            <td>{ listItem.id }</td>
                            <td>{ listItem.category }</td>
                            <td>{ listItem.joke || listItem.setup + listItem.delivery }</td>
                        </tr>
                    );
                    })}
                    {filteredList.map(filterItem => {
                        return (
                        <tr key={filterItem.id}>
                            <td>&nbsp;</td>
                            <td>{ filterItem.id }</td>
                            <td>{ filterItem.category }</td>
                            <td>{ filterItem.joke || filterItem.setup + filterItem.delivery }</td>
                        </tr>
                    );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    ) 
}