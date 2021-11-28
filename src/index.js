import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
