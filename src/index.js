import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextController } from "./context";
import { Context } from './context'


ReactDOM.render(
  <React.StrictMode>
    <ContextController>
      <App />
    </ContextController>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
