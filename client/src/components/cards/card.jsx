import React from 'react';
import  "./card.css"
import { Link } from "react-router-dom";

export default function Card({id,name, flag}) {

  return (
    <div className = "movieCard" >
         <h4 >{name}</h4>
         <div>
           <Link to={`/Detalle/${id}`}>   
           <img className = "movieImage"
              width = "120px" height = "60px"
              src={flag}
             alt={name}
            />
            </Link>
         </div>
     

    </div>
  )
    
  
};