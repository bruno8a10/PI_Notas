import React, { useEffect,useState} from "react";
import {getCountries} from "../../actions";
import { connect } from 'react-redux';
import "./alta.css";  
import { Link } from "react-router-dom";
import logo from "../../img/api.png";
import Menu2 from "../menu/menu2";

function AltaCountry (props) {
//post
  const [input, setInput] = useState({
    // id: [],
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: "",
 })
//select
 const [inCountry, setInCountry] = useState({
  pais:[]
 })
//trear los tipos de pokemon
function handleChange(e) {
  setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  // useEffect(() => {
  // props.getPokemones()
  // }, [])
//}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


function handlePais(e){
  props.getCountries(e.target.value)
  setInput({
    ...input,
    [e.target.name]:[...input.id, e.target.value] 
  })

  setInCountry({
    pais:[... inCountry.pais, props.countries]
  })
}

useEffect(() => {
  props.getCountries()
  }, [])

  async function handleSubmit(e) {
  		e.preventDefault()
    
    	await fetch('http://localhost:3001/actPost', {
	      	method: 'POST',
	      	headers: {
	        'Content-Type': 'application/json'
	    },
    	body: JSON.stringify(input)
    	},
      setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: "",    
      })
      ) 	
  	}
    
    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width="700" height="100" src={logo} ></img>
          </p> 
     <Menu2/>
      <div className="detalle">
      <h2>Alta</h2>
        <form className="forms"  onSubmit={handleSubmit}>
          <div>
        <ul>
        <li>
        <label  for="vida">Actividad</label>
        </li>
        <li>
        <input required  type="text" name="name"  value={input.name} onChange={handleChange} />
        </li>
        <li>
        <label  for="vida">Dificultad</label>
        </li>
        <li>
        <input type="text"  name="difficulty"  value={input.difficulty} onChange={handleChange} />
        </li>
        <li>
        <label for="fuerza">Duracion</label>
        </li>
        <li>
        <input type="text" name="duration"  value={input.duration} onChange={handleChange} />
        </li>
        <li>
        <label for="Defenza">Estacion</label>
        </li>
        <li>
        <input type="text"  name="season"  value={input.season}   onChange={handleChange} />
        </li>
       <li>

       <select name="seanson" 
       id="seanson" 
       value={input.season}
       onChange={handleChange}>
       <option value=""> Estacion del Año</option>
       <option value=""> Invierno </option>
       <option value=""> Otoño</option>
       <option value=""> Primevera</option>
       <option value=""> Verano</option>       
       </select>



       <select className="select-css"   name="id"  value={input.countries}  onChange={handlePais}>
          <option value="">Elegir pais puto</option>
          {props.countries && props.countries.map(c => (
            <option value={c.id} name="c.name">{c.name}</option>
          ))}
         </select>
       </li>
       <li>
         <br></br>
         <input className="cract" type="submit" value="Crear Actividad"/>
       </li>
        </ul>
        </div>
        </form> 


      </div>
  

      </div>
    );
}

//===========================================//

function mapStateToProps(state){
  return {
    countries: state.countries,
    
  }
}

//Actions
function mapDispatchToProps(dispatch) {
  return {
    getCountries:() => dispatch(getCountries()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AltaCountry);