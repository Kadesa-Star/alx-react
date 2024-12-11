import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { logout } from '../actions/uiActions'; // Import logout action creator
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';

function Header({ user, logout }) {
  // If the user is not logged in, render a basic header
  if (!user || !user.isLoggedIn) {
    return (
      <header className={css(headerStyles.appHeader)}>
        <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    );
  } else {
    // If the user is logged in, display a welcome message and logout option
    return (
      <React.Fragment>
        <header className={css(headerStyles.appHeader)}>
          <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <div className={css(headerStyles.greeting)} id="logoutSection">
          <h2>Welcome <strong>{user.email}</strong>
            <em><a href="#" onClick={(e) => { e.preventDefault(); logout(); }}>(logout)</a></em>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

// mapStateToProps function to map the user state to the component's props
const mapStateToProps = (state) => {
  return {
    user: state.user, // Assuming the user information is in state.user
  };
};

// mapDispatchToProps function to map the logout action to the component's props
const mapDispatchToProps = {
  logout, // Automatically binds the logout action creator to the component's props
};

// Connect Header component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: `${primaryColor}`,
    borderBottom: `1px solid ${primaryColor}`,
  },

  appLogo: {
    height: '200px',
    width: '200px',
  },

  greeting: {
    marginTop: '20px',
  },
});

