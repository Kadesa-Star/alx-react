import React from 'react';
import './App.css';
import holbertonLogo from './holberton-logo.png';


function App() {
  return (
  <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="Holberton Logo" />
	  <h1>School dashboard</h1>
      </header>
      <main className="App-body">
	  <p> Login to access the full dashboard</p>
      </main>
      <footer className="App-footer">
	  <p>Copyright 2020 - Holberton School</p>
      </footer>
  </div>
  );
}

export default App;
