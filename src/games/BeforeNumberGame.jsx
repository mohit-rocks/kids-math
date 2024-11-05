import React, { useState } from 'react';
import getRandomNumber from "../math/math.jsx";
import ResultDisplay from "./ResultDisplay.jsx";

function BeforeNumberGame() {
  const [currentNumber, setCurrentNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const checkAnswer = () => {
    if (parseInt(inputValue) === currentNumber - 1) {
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
      <h2>Before Number Game</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Previous number?"
        className="wide-input"
      />
      <div className="number">{currentNumber}</div>
      <button onClick={checkAnswer}>Check</button>
      {result && (
        <ResultDisplay result={result} onNext={resetGame} />
      )}
    </div>
  );
}

export default BeforeNumberGame;
