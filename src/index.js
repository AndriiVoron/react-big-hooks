import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHead from './AppHead';
import AppBody from './AppBody';
import reportWebVitals from './reportWebVitals';
// import ReactTest from './ReactTest';

ReactDOM.render(
  <React.StrictMode>
    <AppHead />
    <AppBody />
    {/* <ReactTest /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
