import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Molecule/Header';
import Contenedor from './Components/Organism/Contenedor';
import Contacto from './Components/Organism/Contacto';
import DetalleEstudiante from './Components/Molecule/DetalleEstudiante';
import MainMenu from './Components/Molecule/MainMenu';

function App() {
  return(
      <Router>
        <MainMenu />
        <Switch>
          <Route path= "/" exact component={ Header } />
          <Route path= "/estudiantes/:id" exact component={ DetalleEstudiante } />
          <Route path= "/estudiantes" exact component={ Contenedor } />
          <Route path= "/contacto" exact component={ Contacto } />
          <Route exact component={()=>
            <h1>Pagina no encontrada</h1>
          } />
          </Switch>
      </Router>

      
  )
}


export default App;
