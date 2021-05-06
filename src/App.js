import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Landing from './pages/landing/landing';
import Servicios from './pages/servicios/servicios';
import Proyectos from './pages/proyectos/proyectos';
import Sobremi from './pages/sobremi/sobremi';
import Contacto from './pages/contacto/contacto';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
        <Router>
        <Navbar/>
      <div>
        <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact  path="/sobremi">
          <Sobremi />
        </Route>
        <Route exact path="/servicios">
          <Servicios />
        </Route>
        <Route exact  path="/proyectos">
          <Proyectos />
        </Route>
        <Route exact  path="/servicios">
          <Servicios />
        </Route>
        <Route exact  path="/contacto">
          <Contacto />
        </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
