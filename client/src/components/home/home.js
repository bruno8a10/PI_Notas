import React, { useEffect, useState } from "react";
import logo from "../../img/api.png";
import "./home.css";
import Menu from "../menu/menu";
import FiltroAct from "../filtro/filtro1";
import FiltroCont from "../filtro/filtro2";
import Ssearch from "../ssearch/ssearch";
import Cards from "../cards/cards";
import { useDispatch, useSelector } from 'react-redux';
import {connect} from "react-redux";
import {getCountries} from "../../actions";

function Home(props) {
  const estados = useSelector((state) => state); 
  const [query, setQuery] = useState('');
  useEffect(() => {
    async function fetchData(query) {
      await props.getCountries(query)
    }
    fetchData(query)
  },[query])

//______________________busqueda
const [input, setInput] = useState({
})
function handlePoke (e) {
  setInput({
    ...input,
    [e.target.name]:[...input.id, e.target.value]
  })
}
const handleChange = (q) => {
  setQuery(q);
}
const handleSubmit = (event) => {
  event.preventDefault();
}


  //_____________________

    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="700" height="100" src={logo} ></img>
          </p>
        <Menu/>
        <div className="contenedor2">
        <FiltroAct/>
        <FiltroCont/>
        </div> 
       
        <p class="centrado">
        <section>
         <form className="form-control"  onSubmit={(e)=>handleSubmit(e)} >
          <input className="input-css"
          type="search"
          placeholder="Buscar..." 
          onChange={(e)=>handleChange(e.target.value)}/>
         </form>
        </section>
        </p>
        <Cards />
    </div>
    )
  }
   //===========================================//
   function mapStateToProps(state){
    return {
      ...state
    }
  }
  //Actions
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (query) => dispatch(getCountries(query))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);