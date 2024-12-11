import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';  // Import rootReducer
import App from './App';

// Enable Redux DevTools Extension if it's available
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store using the rootReducer
const store = createStore(
  rootReducer, // Use the combined rootReducer
  composeEnhancers(applyMiddleware(thunk)) // Apply thunk middleware for async actions
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

