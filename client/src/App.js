import './App.css';
import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/landingPage";
import Home from "./components/home/home";
import Detalle from "./components/detalles/detallesCountry";
import Alta from "./components/alta/alta";
function App() {
  return (
    <BrowserRouter>
    <Route exact path = "/" component ={LandingPage}/>
    <Route exact path = "/Home" component ={Home}/>
    <Route exact path = "/Detalle/:id" component ={Detalle}/>
    <Route exact path = "/Alta" component ={Alta}/>
    </BrowserRouter>
  );
}

export default App;
