import React from "react";
import "./menu.css";  
//import { Link } from "react-router-dom";
import {ordenAZ, ordenZA,ordenMax,ordenMin} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
const dispatch = useDispatch();
const ordenarNombre = useSelector(state => state.countries)
const ordenarPeso = useSelector(state => state.countries)
function AZ(){
  dispatch(ordenAZ(ordenarNombre));
}
function ZA(){
  dispatch(ordenZA(ordenarNombre));
}

function MAX(){
  dispatch(ordenMax(ordenarPeso));
}
function MIN(){
  dispatch(ordenMin(ordenarPeso));
}

  return (
     <div >
 <nav>
			<ul>
				<li><a href="/">Inicio</a></li>
				<li><button  className="button4" onClick={AZ} >Ordenar A-Z</button></li>
				<li><button  className="button4" onClick={ZA} >Ordenar Z-A</button></li>
				<li><button  className="button4" onClick={MAX} >Ordenar Poblacion Min</button></li>
                <li><button  className="button4" onClick={MIN} >Ordenar Poblacion Max</button></li>
				<li><a >Alta</a></li>
			</ul>
		</nav>
      
    </div> 
  );
}