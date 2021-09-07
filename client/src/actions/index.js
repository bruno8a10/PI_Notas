export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_DETALLE_COUNTRY = "GET_DETALLE_COUNTRY";
export const EMPTY_DETALLE_COUNTRY = "EMPTY_DETALLE_COUNTRY";

export function getCountries(query){
    return function(dispatch){
        console.log("hola yo soy el hdp del actions que deseas")
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