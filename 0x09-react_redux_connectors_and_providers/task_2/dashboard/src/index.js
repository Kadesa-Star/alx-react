import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux'; // Import applyMiddleware
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer'; // Adjust the path based on your file structure
import thunk from 'redux-thunk'; // Import redux-thunk

// Create the Redux store and apply redux-thunk middleware
const store = createStore(
  uiReducer,
  applyMiddleware(thunk) // Apply redux-thunk to the store
);

// Render the App component wrapped with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
