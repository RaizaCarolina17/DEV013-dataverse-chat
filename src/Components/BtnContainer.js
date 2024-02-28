export const BtnContainer = () => {
    const container = document.createElement("div");
    container.id = "BtnContainer";
    container.innerHTML = `
      <h4>  <div class="form-container">
      <select name="type" id="type-select" data-testid="filter-type">
      <option value="">Elegir por género literario</option>
      <option value="Literatura">Literatura</option>
      <option value="Poesía">Poesía</option>
      <option value="Poesía, Novela">Poesía, Novela</option>
    </select>

      <select name="country" id="country-select" data-testid="filter-data">
      <option value="">Eligir por nacionalidad</option>
      <option value="Reino Unido">Reino Unido</option>
      <option value="Chile">Chile</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Colombia">Colombia</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Ghana">Ghana</option>
      <option value="Canadá">Canadá</option>
      <option value="México">México</option>
      <option value="Puerto Rico">Puerto Rico</option>
      <option value="EE. UU.">EE. UU.</option>
    </select>

      <select name="ordenar" id="sort-select" data-testid="select-sort">
      <option value="none">Ordenar por</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>
    </select> <br>

    <button data-testid="button-facts" id="button-facts" class="button">ESTADÍSTICAS</button>
    <dialog id="statsDialog">
    <div class="modal-content" id="stats-content">
      <span class="close-btn" onclick="closeStatsDialog()"></span>
      <div id="stats-container"></div> <br>
      <button data-testid="button-close" id="button-close">CERRAR</button>
      </div>
  </dialog>
     
  <button data-testid="button-clear" id="button-clear">LIMPIAR</button>
  
 </h4>
    `;
    return container;
  };
