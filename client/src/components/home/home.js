//import React, { useEffect, useState } from "react";
import logo from "../../img/api.png";
import "./home.css";
import Menu from "../menu/menu";
import FiltroAct from "../filtro/filtro1";
import FiltroCont from "../filtro/filtro2";
import Ssearch from "../ssearch/ssearch";
//import { useDispatch, useSelector } from 'react-redux';

export  default function Home() {


    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="700" height="120" src={logo} ></img>
          </p>
        <Menu/>
        <div className="contenedor2">
        <FiltroAct/>
        <FiltroCont/>
        </div> 
        <Ssearch />
    </div>
    )
  }
   //===========================================//
