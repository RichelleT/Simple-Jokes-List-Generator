//import Header from "./components/header";
import Landing from "./components/landing";
import Jokes from "./components/jokes";
import { Routes, Route } from 'react-router-dom'

function  App() {
  return (
    <div>
      <div className='container'>
      </div>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/jokes" element={<Jokes />} />
        </Routes>
    </div>
    
  );
}

export default App;
