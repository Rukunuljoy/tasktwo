import { useState } from 'react';
import './AlphabetGrid.css';

const AlphabetGrid = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    const newString = outputString + letter;
    const updatedString = replaceConsecutiveLetters(newString);
    setOutputString(updatedString);
  };

  const replaceConsecutiveLetters = (str) => {
    return str.replace(/(.)\1{2,}/g, match => '_'.repeat(match.length));
  };

  return (
    <div>
      <div className="grid-container">
        {alphabet.map(letter => (
          <div key={letter} className="tile" onClick={() => handleClick(letter)}>
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString" className="output-string">
        {outputString}
      </div>
    </div>
  );
};

export default AlphabetGrid;
