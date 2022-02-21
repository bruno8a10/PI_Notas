export const GET_ALUMNO = "GET_ALUMNO";
export const GET_DETALLE_ALUMNO = "GET_DETALLE_ALUMNO";
export const EMPTY_DETALLE_ALUMNO = "EMPTY_DETALLE_ALUMNO";
export const GET_MATERIA= "GET_MATERIA";
export const POSTALUMNO="POSTALUMNO";
export const GET_NOTA="GET_NOTA";
 
export function postAlumno(body){
    return function(dispatch){
        return(
            fetch('/postAlumno', {
                    	method: 'POST',
                    	headers: {
                      'Content-Type': 'application/json'
                  },
              	body: JSON.stringify(body)
              	})
        )
    }
}


export function notaAlumno(){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/nota`)
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_NOTA, payload: json})
            })
        )
    }
}
//____________Traera todo los alumnos
export function getAlumnos(query){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/alumnos?nombre=${query}`)
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_ALUMNO, payload: json})
            })
        )
    }
}
//________________Treaera un Alumno especifico por ID
export function getDetalleAlumno(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/alumnoId/${id}`
        )
        .then(res => res.json())
        //despachamos el objeto al reduce
        .then(json => {
            dispatch({type:GET_DETALLE_ALUMNO, payload: json})
        })
    }
}
export function emptyDetalleAlumno(num) {
    return function(dispatch) {
        dispatch({type: EMPTY_DETALLE_ALUMNO}) 
    }
}

export function getMateria(){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/materias`)
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_MATERIA, payload: json})
            })
        )
    }
}
//_________ordenado por  Nombre
export function ordenNombreAZ(alumnos){
    let  az =  alumnos.sort((a,b) => a.nombre>b.nombre?1: -1)
    return {type: "OrdenarAZ", payload: az}
   }
export function ordenNombreZA(alumnos){
    let  za =  alumnos.sort((a,b) => a.nombre<b.nombre?1: -1)
    return {type: "OrdenarZA", payload: za}
   }
 //________filtro por materia
 export function filtro(alumnos, filtro){
    let arr =[]
   for(let i=0; i<alumnos.length;i++){
       if(alumnos[i].materia){
             for(let j=0; j<alumnos[i].materia.length;j++){
               if(alumnos[i].materia[j].nombre===filtro){
                 arr.push(alumnos[i])
                }
             }
       }
     }
   return{type: "Filtrar", payload: arr}
};   
  
export function notaEspecifica(notas, idA,idM){
    let arr =[]
   for(let i=0; i<notas.length;i++){
       console.log(notas[i])
     }
   return{type: "NotaE", payload: arr}
}; 