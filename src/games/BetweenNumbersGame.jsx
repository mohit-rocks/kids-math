import React, { useState } from 'react';
import ResultDisplay from "./ResultDisplay.jsx";
import getRandomNumber from "../math/math.jsx";

function BetweenNumbersGame() {
  const [startNumber, setStartNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    if (parseInt(inputValue) === startNumber + 1) {
      setResult('correct');
    } else {
      setResult('incorrect');
    }
  };

  const resetGame = () => {
    setInputValue('');
    setResult(null);
    setStartNumber(getRandomNumber());
  };

  return (
    <div>
      <h2>Between Numbers Game</h2>
      <div className="number">
        {startNumber}
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="wide-input"
        />
        {startNumber + 2}
      </div>

      <button onClick={checkAnswer}>Check</button>
      {result && (
        <ResultDisplay result={result} onNext={resetGame} />
      )}
    </div>
  );
}

export default BetweenNumbersGame;
