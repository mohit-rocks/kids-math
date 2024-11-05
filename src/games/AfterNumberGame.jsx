import React, { useState } from 'react';
import getRandomNumber from "../math/math.jsx";
import ResultDisplay from "./ResultDisplay.jsx";

function AfterNumberGame() {
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    if (parseInt(inputValue) === currentNumber + 1) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  const resetGame = () => {
    setInputValue('');
    setResult(null);
    setCurrentNumber(getRandomNumber());
  };

  return (
    <div>
      <h2>After Number Game</h2>
      <div className="number">{currentNumber}</div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Next number?"
        className="wide-input"
      />
      <button onClick={checkAnswer}>Check</button>
      {result && (
        <ResultDisplay result={result} onNext={resetGame} />
      )}
    </div>
  );
}

export default AfterNumberGame;
