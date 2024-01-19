import React, { useState } from 'react'
import availableCharacters from './words.jsx'

function Passwordgenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);


  function generatePassword() {
    let characters = availableCharacters.filter(char => !includeSymbols || /[a-zA-Z0-9]/.test(char))
    let generatedPassword = '';
    for (let i = 0 < length; i++;) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex]
    }
    setPassword(generatedPassword)
  }
  return (
    <>
      <h1>Password Generator</h1>
      <p>{password}</p>
      <label>
        Choose Password Length:
        </label>
        <br />
        <input
          type="number"
          value={length}
          onChange={event => setLength(parseInt(event.target.value))}
        />
        <label>
          Include Symbols:
          <br />
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={event => setIncludeSymbols(event.target.checked)}
          />
        </label>
        <label>
          Include Numbers:
          <br />
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={event => setIncludeNumbers(event.target.checked)}
          />
        </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
    </>
  );
}

export default Passwordgenerator;