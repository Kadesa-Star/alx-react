import React, { useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext'; // Importing AppContext
import './Footer.css';

export default function Footer() {
  // Accessing the context to check if the user is logged in
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>

      {/* Conditionally render "Contact us" link if the user is logged in */}
      {user.isLoggedIn && (
        <p><a href="/contact">Contact us</a></p>
      )}
    </footer>
  );
}

