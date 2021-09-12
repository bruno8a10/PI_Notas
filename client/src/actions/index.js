export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETALLE_COUNTRY = "GET_DETALLE_COUNTRY";
export const EMPTY_DETALLE_COUNTRY = "EMPTY_DETALLE_COUNTRY";
export const GET_ACTIVITY= "GET_ACTIVITY";

export function getCountries(query){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/country?name=${query}`)
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_COUNTRIES, payload: json})
            })
        )
    }
}
export function getActividad(){
    return function(dispatch){
        return(
            fetch(`http://localhost:3001/activity`)
            .then(res => res.json())
            //despachamos el objeto al reduce
            .then((json)=>{
                dispatch({type: GET_ACTIVITY, payload: json})
            })
        )
    }
}
//___________________________________
export function getDetalleCountry(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/countryId/${id}`
            
        )
        .then(res => res.json())
        //despachamos el objeto al reduce
        .then(json => {
            dispatch({type:GET_DETALLE_COUNTRY, payload: json})
        })
    }
}
export function emptyDetalleCountry(num) {
    return function(dispatch) {
        dispatch({type: EMPTY_DETALLE_COUNTRY}) 
    }
}




//_______________Filtros______________
export function filtroContinente(countries, filtro){
    let arr =[]
    if(filtro=="Continente"){
    return{type: "FiltrarPorContinente", payload: arr}
    }

   for(let i=0; i<countries.length;i++){
           if(countries[i].region){
               if(countries[i].region.includes(filtro)){
                   arr.push(countries[i])   
               }
           }
   }
   return{type: "FiltrarPorContinente", payload: arr}
};

export function filtroActividad(countries, filtro){
    let arr =[]
   
    if(filtro=="Actividad"){
    return{type: "FiltrarPorActividad", payload: arr}
    }

   for(let i=0; i<countries.length;i++){
            
           if(countries[i].activities){
              for(let j = 0; j<countries[i].activities;j++){
                if(countries[i].activities[j].includes(filtro)){
                    arr.push(countries[i])   
                }
              }  
           }
   }
   return{type: "FiltrarPorActividad", payload: arr}
};


//_________ordenado por  Pais_________
export function ordenAZ(countries){
    let  az =  countries.sort((a,b) => a.name>b.name?1: -1)
    return {type: "OrdenarAZ", payload: az}
   }
export function ordenZA(countries){
    let  za =  countries.sort((a,b) => a.name<b.name?1: -1)
    return {type: "OrdenarZA", payload: za}
   }
   //_________ordenado por  Poblacion_________
export function ordenMax(countries){
       let  maxP =  countries.sort((a,b) => a.population>b.population?1: -1)
       return {type: "OrdenarMax", payload: maxP}
   }
export function ordenMin(countries){
       let  minP =  countries.sort((a,b) => a.population<b.population?1: -1)
       return {type: "OrdenarMin", payload: minP}
   }