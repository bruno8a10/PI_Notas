import React, { useEffect } from "react";
import {getDetalleCountry, emptyDetalleCountry} from "../../actions";
import {connect} from 'react-redux';
import Spinner from "../Spinner";
import "./detallesCountry.css"; 
import { Link } from "react-router-dom";
import logo from "../../img/api.png";
 import Menu2 from "../menu/menu2";

function DetalleCountry(props) {
  //const id= data.getDetallePokemon(data.match.params.id)
  const id= props.match.params.id;
  useEffect(()=>{
    props.emptyDetalleCountry()
    props.getDetalleCountry(id)    
  },[id])

    return (
      <div  translate ="no">  
        <p className="centrado">
          <img width = "600px" height = "150px" src={logo} ></img>
          </p> 
     <Menu2/>
      <div>
       {props.countryDetalles.name ?
        <div className="detalle" >
           <h4>{props.countryDetalles.name}</h4>
          <img width = "400px" height = "250px"src={props.countryDetalles.flag} alt={props.countryDetalles.name}/>
          <h4>region: {props.countryDetalles.region} Poblacion: {props.countryDetalles.population} </h4>
          <h4>subregion: {props.countryDetalles.subregion} Area: {props.countryDetalles.area}</h4>
        </div>
         :<Spinner/>
       } 
      </div>
       
     </div>
      
    );
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
    emptyDetalleCountry:() => dispatch(emptyDetalleCountry()),
    getDetalleCountry: (id) => dispatch(getDetalleCountry(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetalleCountry);