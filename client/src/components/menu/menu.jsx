import React from "react";
import "./menu.css";  
import {ordenNombreAZ, ordenNombreZA} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
const dispatch = useDispatch();
const ordenarNombre = useSelector(state => state.alumnos)
const ordenarNombreFiltro = useSelector(state => state.filtro)
function AZ(){
  if(ordenarNombreFiltro){
    dispatch(ordenNombreAZ(ordenarNombreFiltro));
  }
    dispatch(ordenNombreAZ(ordenarNombre));
  
 }
function ZA(){
  if(ordenarNombreFiltro){
    dispatch(ordenNombreZA(ordenarNombreFiltro));
  }
  dispatch(ordenNombreZA(ordenarNombre));
}

  return (
     <div >
 <nav>
			<ul>
				<li><a href="/">Todo los Alumnos</a></li>
				<li><button  className="button4" onClick={AZ} >Ordenar Nombre A-Z</button></li>
				<li><button  className="button4" onClick={ZA} >Ordenar Nombre Z-A</button></li>
        <li><a href="AltaMateria">Alta de Materia</a></li>
				<li><a href="Alta">Alta de Alumnos</a></li>
			</ul>
		</nav>
    </div> 
  );
}