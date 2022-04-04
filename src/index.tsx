import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-window.prod.mjs';

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  console.log(11111,navigator);
  
  // Use the window load event to keep the page load performant
  // window.addEventListener('load', () => {
  //   if ('serviceWorker' in navigator) {
  //     const wb = new Workbox('/sw.js');
  
  //     wb.register();
  //   }
  // });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
