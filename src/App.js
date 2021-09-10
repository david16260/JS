import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Contenedor from './Contenedor';
import Contacto from './Contacto';


function App() {
  return(
      <Router>
          <Route path= "/" exact component={ Header } />
          <Route path= "/estudiantes" exact component={ Contenedor } />
          <Route path= "/contacto" exact component={ Contacto } />
      </Router>

      
  )
}


export default App;
