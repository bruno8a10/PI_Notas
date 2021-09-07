import {GET_COUNTRIES, GET_DETALLE_COUNTRY, EMPTY_DETALLE_COUNTRY} from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    countries:[],
    ordenarContries:[],
    countryDetalles:{}
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action){
   //Rutas
    if (action.type === GET_COUNTRIES){
        return {
           ...state, 
           countries: action.payload
        }
      }


    if(action.type === GET_DETALLE_COUNTRY){
        return {
            ...state,
            countryDetalles: action.payload
       }
    }
    if(action.type === EMPTY_DETALLE_COUNTRY){
        return {
            ...state,
            countryDetalles:{}
       }
    }  
    //ordenamiento
      if(action.type === "OrdenarAZ"){
        return{
            ...state,
            ordenarContries: action.payload
        }    
        }
        if(action.type === "OrdenarZA"){
            return{
            ...state,
            ordenarContries: action.payload
            }    
            }
         if(action.type === "OrdenarMax"){
             return{
                ...state,
                ordenarContries: action.payload
             }    
         }
         if(action.type === "OrdenarMin"){
             return{
             ...state,
             ordenarContries: action.payload
             }    
        } 

    return state;
}
 export default rootReducer;