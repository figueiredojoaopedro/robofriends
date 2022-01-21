import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import Card from './Card'
import "tachyons";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
