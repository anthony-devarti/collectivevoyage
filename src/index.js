import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);