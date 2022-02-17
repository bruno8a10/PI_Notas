import React, { useEffect, useState } from "react";
import Card from "./card";
import "./cards.css"
import {getAlumnos} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
export default function Cards() {
  const dispatch = useDispatch()
  const estados = useSelector((state) => state); 
  const a = useSelector((state) => state.alumnos); 
  const f = useSelector((state) => state.filtro)
  const [query, setQuery] = useState('')
  const [numeroPagina, setPagina] = useState(1);
	const grupo = 5;
	const conteoFinal = numeroPagina * grupo;
	const conteoInicial = conteoFinal - grupo;
  const alumnos = a.slice(conteoInicial,conteoFinal)
  //paginado
  var inicio = true;
  var final = true;
  var pag = true;
  if(conteoInicial=== 0 || f.length>0){
    inicio=false;
}
if(numeroPagina >=Math.ceil(alumnos.length/1|| f.length>0)){
    final=false
}
if(f.length>0){
    final=false
}


  useEffect(() => {
    dispatch(getAlumnos(query))
   },[query])
    return (
    <div>
       <div className="contenedor">
            { 
            f.length > 0? f.map(c=>
              <div>
              <Card
              key={c.id}     
                 id={c.id}
                 nombre={c.nombre}
                 apellido={c.apellido}     
                 foto={c.foto}         
              /> 
            </div>
           ):


            alumnos.map(c=>
               <div>
               <Card
               key={c.id}     
                  id={c.id}
                  nombre={c.nombre}
                  apellido={c.apellido}     
                  foto={c.foto}         
               /> 
             </div>
            )
            }
       </div>
       <div >
           {inicio ?(
               <button className="button1" onClick={() => setPagina(numeroPagina - 1)}>Anterior</button>
           ):null}
            {pag ?(
               <button  className="button1">{numeroPagina}</button>
           ):null}

            {final ?(
               <button   className="button1" onClick={() => setPagina(numeroPagina + 1)}>Siguiente</button>
           ):null}
            
            
         </div>
     </div>
    )
};
