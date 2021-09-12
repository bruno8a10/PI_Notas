import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'; 
import {filtroContinente} from "../../actions";
import "../filtro/filtro.css"
import { useDispatch, useSelector } from 'react-redux';

function Filtro() {
const dispatch = useDispatch();
const pFiltro = useSelector(state => state.countries)
 //____________________
 function fn2(e) {
  // alert("entrooo" + e.target.value)
  dispatch(filtroContinente(pFiltro, e.target.value));
}  
  return (
    <div>
        <select className="select-css"  name="filtro" onChange={(e) => fn2(e)} >
          <option value="Continente">Todo los Continentes</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
         </select>
    </div>
  );
}

function mapStateToProps(state){
  return {
    ...state
  }
}
//Actions
function mapDispatchToProps(dispatch) {
  return 
}
export default connect(mapStateToProps,mapDispatchToProps)(Filtro);