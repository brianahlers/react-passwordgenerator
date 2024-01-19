import React, { useState } from 'react'
import availableCharacters from './words.jsx'

function Passwordgenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeRandomCase, setIncludeRandomCase] = useState(false);


  function generatePassword() {
    const passwordLength = parseInt(length);
    if (isNaN(passwordLength) || passwordLength < 0) {
      return;
    }

    let characters = availableCharacters[0];
    
    if (includeSymbols) {
      characters += '!@#$%^&*';
    }
    if (includeNumbers) {
      characters += '1234567890';
    }
    if (includeRandomCase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    let generatedPassword = '';

    for (let i = 0; i <passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }
    setPassword(generatedPassword);
  }
  return (
    <>
      <h1>Password Generator</h1>
      <label>
        Choose Password Length:
      </label>
      <br />
      <input
        type="range"
        min="8"
        max="32"
        value={length}
        onChange={event => setLength(parseInt(event.target.value))}
      />
      <span>{length}</span>
      <br />
      <label>
        Include Symbols:
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={event => setIncludeSymbols(event.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={event => setIncludeNumbers(event.target.checked)}
        />
      </label>
      <br />
      <label>
        Include Random Case:
        <input
          type="checkbox"
          checked={includeRandomCase}
          onChange={event => setIncludeRandomCase(event.target.checked)}
        />
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <div>{password}</div>
    </>
  );
}

export default Passwordgenerator;