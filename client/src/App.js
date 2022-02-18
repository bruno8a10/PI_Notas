import './App.css';
import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import Detalle from "./components/detalles/detalles";
import Alta from "./components/alta/AltaAlumno";
import AltaMateria from "./components/altaMateria/altaMateria";
function App() {
  return (
    <BrowserRouter>
    <Route exact path = "/" component ={Home}/>
    <Route exact path = "/Detalle/:id" component ={Detalle}/>
    <Route exact path = "/Alta" component ={Alta}/>
    <Route exact path = "/AltaMateria" component ={AltaMateria}/>
    </BrowserRouter>
  );
}

export default App;
