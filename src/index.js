import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Molecule/Header';
import Footer from './Components/Molecule/Footer';
import ComponentePrueba from './Components/Molecule/ComponentePrueba';
import Estudiantes from './Components/Molecule/Estudiantes';
import Bienvenido from './Components/Molecule/Bienvenido';

//ReactDOM.render(
  //<ComponentePrueba nombre="David" edad = "18" genero="M"/>,
  //document.getElementById('root')
//);

ReactDOM.render(
  <App/>,
  document.getElementById('header')
);


ReactDOM.render(
  <Footer/>,
  document.getElementById('footer')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
