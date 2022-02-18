import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import{useParams} from 'react-router-dom'
import {getDetalleAlumno,emptyDetalleAlumno} from "../../actions";
import Spinner from "../Spinner";
import "./detalles.css"; 
import Menu2 from "../menu/menu2";
export default function Detalle() {
  const dispatch = useDispatch()
  
  const alumno = useSelector((state => state.AlumnoDetalles))
  const {id}= useParams()
  const [input, setInput] = useState({
    nombre: alumno.nombre,
    dni:alumno.dni,
    apellido:alumno.apellido,
    sexo:alumno.sexo,
    estadoCivil:alumno.estadoCivil,
    foto:alumno.foto,
    domicilio:alumno.domicilio
 })
 function handleChange (e){
  //permite ingresar los datos
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}

async function handleSubmit(e) {
  let { nombre, apellido,dni, estadoCivil,sexo,domicilio,foto} = input
  let body={nombre, apellido,dni, estadoCivil,sexo,domicilio,foto}
  console.log(body)
  e.preventDefault()
    // dispatch(postAlumno(body));
    await fetch('http://localhost:3001/putAlumno/'+id, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
  }
  ,
  
    )
  }
  useEffect(()=>{
    dispatch(emptyDetalleAlumno())
    dispatch(getDetalleAlumno(id))    
  },[id,dispatch])
    return (
      <div  translate ="no">  
       <p class="centrado">
          <h2>Sistema de Gestion de Alumnos</h2>
          </p>
     <Menu2/>
      <div>
       {alumno.nombre?
        <div className="detalle" >
          <form className="forms"  onSubmit={handleSubmit}>
          <ul>
           <li>
           <label>Dni </label>
           </li>
          <li>
          <input required  type="number" name="dni"  value={input.dni || alumno.dni}   onChange={handleChange}/>
         </li>
         <li>
         <label>Nombre</label>
         </li>
         <input required  type="text" name="nombre" value={input.nombre || alumno.nombre} onChange={handleChange} />
         <li>
         <label>Apellido</label>
         </li>
         <li>
         <input required  type="text" name="apellido" value={input.apellido || alumno.apellido} onChange={handleChange}/>
         </li>
         <li>
         <label>Sexo</label>
         </li>
         <li>
         <input required  type="text" name="sexo" value={input.sexo || alumno.sexo} onChange={handleChange}/>
        </li>
        <li>
        <label>Estado Civil</label>
        </li>
         <li>
         <input required  type="text" name="estadoCivil" value= {input.estadoCivil || alumno.estadoCivil} onChange={handleChange}/>
        </li>
        <li>
        <label>Domicilio</label>
        </li>
        <li>
        <input required  type="text" name="domicilio" value={input.domicilio|| alumno.domicilio}  onChange={handleChange}/>
        </li>
        <li>
        <label>Url Foto</label>
        </li>
        <li>
        <input required  type="text" name="nombre" value= {input.foto||alumno.foto} onChange={handleChange}/>
        </li>
        <li>
        <input className="cract" type="submit" value="Crear"/>
        
        </li>
         </ul>  
         </form> 
          
           <br></br>
          <img width = "250px" height = "150px"src={alumno.foto} alt={alumno.foto}/>
      
         </div>
         
         :<Spinner/>
       } 
      </div>
       
     </div>
      
    );
}