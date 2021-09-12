import React, { useEffect, useState } from "react";
import {getActividad} from "../../actions";
import { connect } from 'react-redux'; 
import {filtroActividad} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import "../filtro/filtro.css"
function Filtro(props) {

  const dispatch = useDispatch();
  // const actividadFiltro = useSelector(state => state.countries)
  
//   function fn2(e) {
//     alert("entrooo" + e.target.value)
//     dispatch(filtroActividad(actividadFiltro, e.target.value));
// }
//__________________________________
//treaera todo los tipos de pokemones
// const [inAct, setInAct] = useState({
//   filtroActividad: []
// })

// function handlePoke (e) {
//     props.getActividad(e.target.value)  
//     setInAct({
//       poks:[...inAct.poks, props.activity]
//     })   
// }
	useEffect(() => {
   props.getActividad()
	},[])
  return (
    <div>
        {/* <select className="select-css"   name="filtroActividad" onChange={(e) => fn2(e)} > */}
        <select className="select-css"   name="filtroActividad"  >
          <option value="Actividad">Actividades Turisticas</option>
          {props.activity && props.activity.map(c => (
            <option value={c.name} name="c.name">{c.name}</option>
          ))}
         </select>
    </div>
  );
}

function mapStateToProps(state){
  return {
    ...state
  }
}
//Actions
function mapDispatchToProps(dispatch) {
  return {
    getActividad:() => dispatch(getActividad()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filtro);