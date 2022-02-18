import React, { useEffect } from "react";
import {getMateria} from "../../actions";
import {filtro} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import "../filtro/filtro.css"
export default  function Filtro() {
  const dispatch = useDispatch();
  const materias = useSelector(state => state.materias)
  const alumnos = useSelector(state => state.alumnos)
  
  function fn2(e) {
    //alert("entrooo" + e.target.value)
    dispatch(filtro(alumnos, e.target.value));
}

	useEffect(() => {
  dispatch(getMateria())
	},[])
  return (
    <div>
        <select className="select-css"   name="filtroActividad" onChange={(e) => fn2(e)} >
          <option value="Actividad">Todas las materias</option>
          {materias && materias.map(c => (
            <option value={c.nombre} name="c.nombre">{c.nombre}</option>
          ))}
         </select>
    </div>
  );
}