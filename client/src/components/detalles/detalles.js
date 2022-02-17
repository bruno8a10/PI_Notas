import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getDetalleAlumno, emptyDetalleAlumno} from "../../actions";
import Spinner from "../Spinner";
import "./detalles.css"; 
import Menu2 from "../menu/menu2";
export default function Detalle(props) {
  const dispatch = useDispatch()
  const alumno = useSelector((state => state.AlumnoDetalles))
  const id= props.match.params.id;
  useEffect(()=>{
    dispatch(emptyDetalleAlumno())
    dispatch(getDetalleAlumno(id))    
  },[id])
    return (
      <div  translate ="no">  
       <p class="centrado">
          <h2>Sistema de Gestion de Alumnos</h2>
          </p>
     <Menu2/>
      <div>
       {alumno.nombre?
        <div className="detalle" >
           <h4>{alumno.dni}</h4>
           <h4>Nombre : {alumno.nombre} , Apellido : {alumno.apellido}</h4>
           <h4>Sexo : {alumno.sexo} , Estado Civil : {alumno.estadoCivil}</h4>
          <img width = "350px" height = "250px"src={alumno.foto} alt={alumno.nombre}/>
         </div>
         :<Spinner/>
       } 
      </div>
       
     </div>
      
    );
}