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
  //_____________________

    return(
    <div className="Home">
          <p class="centrado">
          <img className="i" width="700" height="120" src={logo} ></img>
          </p>
        <Menu/>
        <div className="contenedor2">
        <FiltroAct/>
        <FiltroCont/>
        </div> 
        <Ssearch />
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