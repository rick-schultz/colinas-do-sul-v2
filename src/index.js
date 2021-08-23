import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.css';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Colinas do Sul - iTUDE</title>
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
