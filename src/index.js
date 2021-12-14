import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import store from './redux/reducer';
import { BrowserRouter } from "react-router-dom";
import {  Provider } from "react-redux";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
