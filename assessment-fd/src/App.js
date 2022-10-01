import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JokesList from './pages/JokesList';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/jokes" exact element={<JokesList />} />
      </Routes>
    </div>
  );
}

export default App;
