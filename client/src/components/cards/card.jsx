import React from 'react';
import  "./card.css"
import { Link } from "react-router-dom";

export default function Card({id,nombre, foto,apellido}) {

  return (
    <div className = "movieCard" >
         <h4 >{nombre}  {apellido}</h4>
         <div>
           <Link to={`/Detalle/${id}`}>   
           <img className = "movieImage"
              width = "180px" height = "100px"
              src={foto}
             alt={nombre}
            />
            </Link>
         </div>
     

    </div>
  )
    
  
};