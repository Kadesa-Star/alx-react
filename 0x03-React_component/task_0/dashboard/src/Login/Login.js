import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle login goes here
    console.log("Form submitted");
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required aria-label="Email" />
              
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required aria-label="Password" />
              
              <button type="submit" aria-label="Submit login form">OK</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
