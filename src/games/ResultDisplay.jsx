import React from 'react';
import happy from "../assets/happy.jpg";
import sad from "../assets/sad.png";
import PropTypes from "prop-types";

function ResultDisplay({ result, onNext }) {
  return (
    <div className="result">
      <div className="result-text">{result === 'correct' ? 'Correct!' : 'Incorrect!'}</div>
      <img
        src={result === 'correct' ? happy : sad}
        alt={result === 'correct' ? 'Happy Kitten' : 'Sad Kitten'}
        className="kitten"
      />
      <div>
        <button onClick={onNext} className="clear-button">Clear</button>
      </div>
    </div>
  );
}

ResultDisplay.propTypes = {
  result: PropTypes.oneOf(['correct', 'incorrect']).isRequired,
  onNext: PropTypes.func.isRequired,
}
export default ResultDisplay;
