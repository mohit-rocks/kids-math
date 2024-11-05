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
      <div className="number">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Before"
          className="wide-input"
        />
        {currentNumber}
      </div>
      <div>
        <button onClick={checkAnswer} className="check-button">Check</button>
      </div>
      {result && (
        <ResultDisplay result={result} onNext={resetGame} />
      )}
    </div>
  );
}

export default BeforeNumberGame;
