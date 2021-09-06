import "../filtro/filtro.css"
export default  function Filtro() {
  return (
    <div>
        <select className="select-css"   name="filtro"  >
          <option value="">Continente</option>
          <option value="">Africa</option>
          <option value="">Americas</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
          <option value="">Oceania</option>
         </select>
    </div>
  );
}
