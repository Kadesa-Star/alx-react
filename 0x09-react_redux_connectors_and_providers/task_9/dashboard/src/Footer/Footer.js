import React from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer({ user }) { // Destructure user from props
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>

      {/* Conditionally render "Contact us" link if the user is logged in */}
      {user && user.isLoggedIn && (
        <p><a href="/contact">Contact us</a></p>
      )}
    </footer>
  );
}

// mapStateToProps function to map Redux state to the component's props
const mapStateToProps = (state) => {
  return {
    user: state.user, // Assuming user information is in state.user
  };
};

// Connect Footer component to Redux store
export default connect(mapStateToProps)(Footer);

