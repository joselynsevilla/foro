import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route, Link
} from "react-router-dom";
import Prueba from './Prueba';
import Pagina2 from './Pagina2';
import ReactDOM from 'react-dom';




const container = document.getElementById("root");
const root = createRoot(container);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
