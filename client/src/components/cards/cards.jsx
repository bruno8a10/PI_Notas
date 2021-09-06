import React, { useEffect, useState } from "react";
import Card from "./card";
import "./cards.css"
import {getCountries} from "../../actions";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


function Cards(props) {
  //const dispatch = useDispatch();
// const f = useSelector(state => state.filtroPokemon)
  const estados = useSelector((state) => state);
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 10;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
    const countries = props.countries.slice(conteoInicial,conteoFinal)
  useEffect(()=> {
    props.getCountries()
   },[])
  // acá va tu código
  // tip, podés usar un map
    return (
    <div>
       <div className="contenedor">
            { countries.map(c=>
               <div>
               <Card    
                  id={c.id}
                  name={c.name}   
                  flag={c.flag}         
               /> 
             </div>
              
            )}
       </div>
       <div className="paginationBtns">
             <button className="button" onClick={() => setPagina(numeroPagina - 1)}>Anterior</button>
            <button className="button">{numeroPagina}</button>
            <button className="button" onClick={() => setPagina(numeroPagina + 1)}>Siguiente</button>
         </div>
     </div>
    )
};
function mapStateToProps(state){
return {
    ...state
}
}
function mapDispatchToProps(dispatch){
return {
   
    getCountries: (query) => dispatch(getCountries(query))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cards)