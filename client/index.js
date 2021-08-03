require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./favicon.png');
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';



ReactDOM.render(
  <App />,
  document.getElementById('root')
);