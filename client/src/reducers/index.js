import {GET_MATERIA,GET_ALUMNO, GET_DETALLE_ALUMNO, GET_NOTA,EMPTY_DETALLE_ALUMNO} from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    det:true,
    alumnos:[],
    materias:[],
    filtro:[],
    ordenarNombre:[],
    AlumnoDetalles:{},
    notaAlumnos:[],
    n:[]
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action){
   //Rutas
    if (action.type === GET_ALUMNO){
        return {
           ...state, 
           alumnos: action.payload
        }
      }
      if (action.type === GET_NOTA){
        return {
           ...state, 
           notaAlumnos: action.payload
        }
      }
      if (action.type === GET_MATERIA){
        return {
           ...state, 
           materias: action.payload
        }
      }
    if(action.type === GET_DETALLE_ALUMNO){
       
        return {
            ...state,
            AlumnoDetalles: action.payload
       }
    }
    if(action.type === EMPTY_DETALLE_ALUMNO){
        return {
            ...state,
            AlumnoDetalles:{}
       }
    }  
    //ordenamiento
      if(action.type === "OrdenarAZ"){
        return{
            ...state,
            ordenarNombre: action.payload
        }    
        }
        if(action.type === "OrdenarZA"){
            return{
            ...state,
            ordenarNombre: action.payload
            }    
            } 
  //   //________________________________________
    if(action.type === "Filtrar"){
      console.log("reduce")
        return{
        ...state,
        filtro: action.payload
        }    
   } 
   if(action.type === "NotaE"){
    console.log("reduce")
      return{
      ...state,
      n: action.payload
      }    
 } 
   

    return state;
}
 export default rootReducer;