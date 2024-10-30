// src/App.js
import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        
        {/* Add email input field */}
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />

        {/* Add password input field */}
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />

        {/* Add OK button */}
        <button type="button">OK</button>
      </main>
      <footer className="App-footer">
        <p>{getFooterCopy(false)}</p>
        <p>Copyright {getFullYear()} - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
