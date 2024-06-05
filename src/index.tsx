import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import 'assets/css/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/**
 * Entry point of the application, rendering the root App component.
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

