import React from "react";
import "./menu.css";  
//import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
const dispatch = useDispatch();
const ordenarNombre = useSelector(state => state.countries)
const ordenarNombreFiltro = useSelector(state => state.filtroContinente)
const ordenarPeso = useSelector(state => state.countries)
const ordenarPesoFiltro = useSelector(state => state.filtroContinente)
function AZ(){
  if(ordenarNombreFiltro){
    dispatch(ordenAZ(ordenarNombreFiltro));
  }
    dispatch(ordenAZ(ordenarNombre));
  
}
function ZA(){
  if(ordenarNombreFiltro){
    dispatch(ordenZA(ordenarNombreFiltro));
  }
  dispatch(ordenZA(ordenarNombre));
}
function MAX(){
  if(ordenarPesoFiltro){
    dispatch(ordenMax(ordenarPesoFiltro));
  }
  dispatch(ordenMax(ordenarPeso));
}
function MIN(){
  if(ordenarPesoFiltro){
    dispatch(ordenMin(ordenarPesoFiltro));
  }
  dispatch(ordenMin(ordenarPeso));
}

  return (
     <div >
 <nav>
			<ul>
				<li><a href="/Home">Todo los Paises</a></li>
				<li><button  className="button4" onClick={AZ} >Ordenar A-Z</button></li>
				<li><button  className="button4" onClick={ZA} >Ordenar Z-A</button></li>
				<li><button  className="button4" onClick={MAX} >Ordenar Poblacion Min</button></li>
                <li><button  className="button4" onClick={MIN} >Ordenar Poblacion Max</button></li>
				<li><a href="Alta">Alta</a></li>
			</ul>
		</nav>
    </div> 
  );
}