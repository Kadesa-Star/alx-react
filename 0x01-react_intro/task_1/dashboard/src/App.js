// src/App.js
import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';
import { getFullYear, getFooterCopy } from './utils'; // Import the functions

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
        <p>{getFooterCopy(false)}</p> {/* Call the function with false */}
        <p>Copyright {getFullYear()} - Holberton School</p> {/* Call the function to get the year */}
      </footer>
    </div>
  );
}

export default App;
