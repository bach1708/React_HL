import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NvbApp from './NvbApp.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('nvb-root'));
root.render(
  <React.StrictMode>
    <NvbApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
