import './App.css'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import NextNumberGame from "./games/NextNumberGame.jsx";
import PreviousNumberGame from "./games/PreviousNumberGame.jsx";
import BetweenNumbersGame from "./games/BetweenNumbersGame.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Number Game for Kids</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/next" element={<NextNumberGame />} />
          <Route path="/previous" element={<PreviousNumberGame />} />
          <Route path="/between" element={<BetweenNumbersGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Choose a Game Mode</h2>
      <p>Select one of the following:</p>
      <nav>
        <ul>
          <li><Link to="/next">Next Number</Link></li>
          <li><Link to="/previous">Previous Number</Link></li>
          <li><Link to="/between">Between Numbers</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
