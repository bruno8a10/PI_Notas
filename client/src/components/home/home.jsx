import React, { useEffect, useState } from "react";
import "./home.css";
import Menu from "../menu/menu";
import Filtro from "../filtro/filtro1";
import Cards from "../cards/cards";
import { useDispatch,useSelector} from 'react-redux';
import {getAlumnos} from "../../actions";
export default function Home() {
  const dispatch = useDispatch()
  const estado = useSelector((state) => state); 
  //____busqueda_______
  const [query, setQuery] = useState("");
function handleChange (q) {
  q.preventDefault()
  setQuery(q.target.value);
}
function handleSubmit (q)  {
  q.preventDefault();
  dispatch(getAlumnos(query))
setQuery({
    name:""
})
}
useEffect(() => {
 dispatch(getAlumnos(query))
},[query])
  //_____________________
    return(
    <div className="Home">
          <p class="centrado">
          <h2>Sistema de Gestion de Alumnos</h2>
          </p>
        <Menu/>
        <Filtro/>
        <p class="centrado">
        <section>
         <form className="form-control"  onSubmit={(e)=>handleSubmit(e)} >
          <input className="input-css"
          type="search"
          placeholder="Buscar nombre..." 
          value = {query.name}
          onChange={(e)=>handleChange(e)}/>
         </form>
        </section>
        </p>
        <Cards />
    </div>
    )
  }
