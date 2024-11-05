import './App.css'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import AfterNumberGame from "./games/AfterNumberGame.jsx";
import BeforeNumberGame from "./games/BeforeNumberGame.jsx";
import BetweenNumbersGame from "./games/BetweenNumbersGame.jsx";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Number Game for Kids</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/after" element={<AfterNumberGame />} />
          <Route path="/before" element={<BeforeNumberGame />} />
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
          <li><Link to="/after">After Number</Link></li>
          <li><Link to="/before">Before Number</Link></li>
          <li><Link to="/between">Between Numbers</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
