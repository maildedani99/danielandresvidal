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
    <div>
        <Navbar/>
        <div id="sobremi" >
          <Sobremi />
        </div>
        <div id="servicios">
          <Servicios />
        </div>
        <div id="proyectos">
          <Proyectos />
        </div>
        
        <div id="contacto">
          <Contacto />
        </div>
        </div>
  );
}

export default App;
