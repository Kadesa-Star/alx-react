import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import WithLoggingHOC from "../HOC/WithLogging";  // Import HOC for logging

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent form reload
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value }, this.updateSubmitButton);
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value }, this.updateSubmitButton);
  };

  updateSubmitButton = () => {
    const { email, password } = this.state;
    this.setState({
      enableSubmit: email.trim() !== "" && password.trim() !== "",
    });
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email" className={css(styles.label)}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={css(styles.input)}
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password" className={css(styles.label)}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={css(styles.input)}
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              className={css(styles.submitButton)}
              disabled={!enableSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
  },
  input: {
    marginLeft: "10px",
    marginRight: "20px",
  },
  label: {
    marginTop: "10px",
  },
  submitButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    ":disabled": {
      backgroundColor: "#ccc",
    },
  },
});

export default WithLoggingHOC(Login); // Wrap with HOC for logging

