import React from 'react';
import {NavLink} from "react-router-dom";

const MainMenu = () => (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-dark">
      <a class="navbar-brand" href="#">Menú</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active"><NavLink to="/">Home</NavLink></a>
      <a class="nav-item nav-link" ><NavLink to="/estudiantes">Personajes</NavLink></a>
      <a class="nav-item nav-link"><NavLink to="/contacto">Contacto</NavLink></a>
     
    </div>
  </div>
</nav>
   
    </>
);

export default MainMenu;
