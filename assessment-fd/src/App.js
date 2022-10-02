import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import JokesList from './pages/JokesList';
import * as React from 'react';

function App() {
  let navigate = useNavigate();
  let isLoggedIn = localStorage.getItem('username');

  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/jokes" exact element={isLoggedIn !== "undefined" ? <JokesList /> : <Home />} />
      </Routes>
    </div>
  );
}

export default App;
