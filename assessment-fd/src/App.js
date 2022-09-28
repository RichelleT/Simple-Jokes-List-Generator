import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jokes from './pages/Jokes';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/jokes" exact element={<Jokes />} />
      </Routes>
    </div>
  );
}

export default App;
