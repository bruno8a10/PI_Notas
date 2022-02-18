import React, {useState} from "react";
import {useDispatch } from 'react-redux';
import "./altaMateria.css";  
import Menu2 from "../menu/menu2";

export default function AltaMateria(props) {
  const dispatch = useDispatch();
//post
  const [input, setInput] = useState({
    nombre: "",
 })
 function handleChange (e){
  //permite ingresar los datos
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}

// function handleTypes (e){
//   setInput({
//     ...input,
//     [e.target.name]:[...input.id, e.target.value]
//   })

// } 
  async function handleSubmit(e) {
    let {nombre} = input
  	let body={nombre}
    console.log(body)
    e.preventDefault()
     
    await fetch('http://localhost:3001/postMateria', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }
    ,

      setInput({
        nombre: ""  
      })	
    )
  	}
    
    return (
      <div  translate ="no">  
         <p class="centrado">
          <h2>Sistema de Gestion de Alumnos</h2>
          </p>
     <Menu2/>
      <div className="detalle">
      <h2>Alta de Materia</h2>
        <form className="forms"  onSubmit={handleSubmit}>
          <div>
        <ul>
        <li>
        <label  for="nombre">Nombre</label>
        </li>
        <li>
        <input required  type="text" name="nombre"  value={input.nombre} onChange={handleChange} />
        </li>
        <li>
         <br></br>
         <input className="cract" type="submit" value="Crear"/>
       </li>
        </ul>
        </div>
        </form> 
      </div>
  

      </div>
    );
}

