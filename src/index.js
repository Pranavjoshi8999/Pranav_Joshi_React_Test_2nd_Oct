// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store/store'; // Import your Redux store
import App from './App';

ReactDOM.render(
  <Provider store={store}> {/* Wrap your App with Provider and pass the store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
