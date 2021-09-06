import {GET_COUNTRIES} from "../actions"
// //==== Setear Estado Global Inicial ======//
const initialState = {
    countries:[],
    ordenarContries:[]
}
// //==== Setear Reducers ======//
function rootReducer(state = initialState, action){
    console.log(" hola soy el culero de reducers")
    if (action.type === GET_COUNTRIES){
        return {
           ...state, 
           countries: action.payload
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