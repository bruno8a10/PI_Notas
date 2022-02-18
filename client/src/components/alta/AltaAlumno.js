import React, { useEffect,useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import "./alta.css";  
import Menu2 from "../menu/menu2";
import {getMateria} from "../../actions";

export default function AltaAlumno(props) {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.materias); 
//post
  const [input, setInput] = useState({
    materias: [],
    nombre: "",
    apellido: "",
    dni: "",
    estadoCivil: "",
    domicilio: "",
    sexo:"",
    foto: "",
 })
 function handleChange (e){
  //permite ingresar los datos
  setInput({
    ...input,
    [e.target.name]: e.target.value
  })
}
//trear los datos
const [inp, setIn] = useState({
  materia :[]
})

function handleTypes (e){
  props.getTypes(e.target.value)
  setInput({
    ...input,
    [e.target.name]:[...input.id, e.target.value]
  })
  setIn({
    materia:[...inp.materia, props.materias]
  })
} 

  useEffect(() => {
    dispatch(getMateria())

    },[])

    let materias= []
    let clickT= (e)=> {
      materias.push(e.target.value)
      console.log(materias)
    }
  async function handleSubmit(e) {
    let { nombre, apellido,dni, estadoCivil,sexo,domicilio} = input
  	let body={nombre, apellido,dni, estadoCivil,sexo,materias,domicilio}
    console.log(body)
    e.preventDefault()
      // dispatch(postAlumno(body));
      await fetch('http://localhost:3001/postAlumno', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
    }
    ,
      setInput({
        nombre: "",
        apellido: "",
        estadoCivil: "",
        dni:"",
        sexo: "",
        foto:"",
        domicilio: "",
        materias: ""   
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
      <h2>Alta de alumno</h2>
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
        <label  for="apellido">Apellido</label>
        </li>
        <li>
        <input type="text"  name="apellido"  value={input.apellido} onChange={handleChange} />
        </li>
        <li>
        <label for="dni">DNI</label>
        </li>
        <li>
        <input type="text" name="dni"  value={input.dni} onChange={handleChange} />
        </li>
        <li>
        <label for="dni">Domicilio</label>
        </li>
        <li>
        <input type="text" name="domicilio"  value={input.domicilio} onChange={handleChange} />
        </li>
        <li>
        <label for="foto">Url Foto</label>
        </li>
        <li>
        <input type="text" name="foto"  value={input.foto} onChange={handleChange} />
        </li>
        <li>
        <label for="estado">Estado Civil</label>
        </li>
        <li>
       <select 
        name="estadoCivil" id="estadoCivil" 
        value={input.estadoCivil} onChange={handleChange}
       >
       <option value="">Elegir el estado...</option>
       <option value="Casado/a"> Casado/a </option>
       <option value="Soltero/a"> Soltero/a</option>
       <option value="Divorciado/a"> Divorciado/a</option>        
       </select>
       </li>
       <li></li>
        
        <li>
        <label for="sexo">Sexo</label>
        </li>
       <li>
       <select 
        name="sexo" id="sexo" 
        value={input.sexo} onChange={handleChange}
       >
       <option value="">Elegir el sexo...</option>
       <option value="Hombre"> Hombre </option>
       <option value="Mujer"> Mujer</option>     
       </select>
       </li>
       <li>
       <li>
         <label for="materias">Materias</label>
         </li>
       <select className="select-css"  
        name="materias"  
        multiple requires 
        onClick={clickT}
        >
          <option value="">Elegir materias</option>
          {a&& a.map(c => (
            <option value={c.id} name="nombre">{c.nombre}</option>
          ))}
         </select>
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

