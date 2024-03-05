import { filterData, sortData, computeStats, computeCountryStats, computeGenreStats, } from "../lib/dataFunctions.js";
import data from './../data/dataset.js';
import { renderItems } from "../components/renderItems.js";


export const BtnContainer = () => {
  const container = document.createElement("div");
  container.id = "BtnContainer";
  container.innerHTML = `
    <h4>  <div id ="containerSelects" class="form-container">
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
    <option value="">Ordenar por</option>
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

<div id="cardsContainer"> </div>
  `;

  const cardsContainer = container.querySelector("#cardsContainer");
  cardsContainer.appendChild(renderItems(data));

  //selecciona los elementos select
  const filterSelectors = [
    { selector: '[data-testid="filter-type"]', property: "mainField" },
    { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
    { selector: '[data-testid="select-sort"]', property: "name" },


  ];

  let sortConfig = {
    sortBy: "name",
    sortOrder: "asc", 
  };

  // Agrega EventListener para los select
  filterSelectors.forEach(({ selector }) => {
    const selectElement = container.querySelector(selector);
    selectElement.addEventListener("change", () => applyFilters());
  });

  /////EvenListener para el select de ordenar/////
  const sortSelect = container.querySelector('[data-testid="select-sort"]');
  sortSelect.addEventListener("change", () => {
    //console.log("esto funciona")
    //sortConfig.sortBy = sortSelect.value;
    sortConfig.sortOrder = sortSelect.value === "asc" ? "asc" : "desc";
    //applyFilters();
    const dataSort = sortData(data, sortConfig)
    // Limpia la lista antes de renderizar
    cardsContainer.innerHTML = "";
    // Renderiza los datos filtrados
    cardsContainer.appendChild(renderItems(dataSort));

  });

  // Función para aplicar los filtros
  function applyFilters() {
    // Obtiene los valores seleccionados de los elementos select
    const filters = filterSelectors.map(({ selector, property }) => ({
      property,
      value: container.querySelector(selector).value,
    }));

    // Realiza el filtrado de datos
    let filteredData = [...data];
    filters.forEach(({ property, value }) => {
      if (value) {
        filteredData = filterData(filteredData, property, value);
      }
    });

    //Ordena los datos//
    filteredData = sortData(filteredData, sortConfig);


    // Limpia la lista antes de renderizar
    cardsContainer.innerHTML = "";
    // Renderiza los datos filtrados
    cardsContainer.appendChild(renderItems(filteredData));

  

   function renderCardsContainer() { // Función para regresar las tarjetas a su estado original
    cardsContainer.innerHTML = "";
    const resultList = renderItems(data);
    cardsContainer.appendChild(resultList);
  }

  //Evento para el botón limpiar
  const btnClear = document.getElementById("button-clear");
  btnClear.addEventListener("click", function () {
    resetFilters();
    renderCardsContainer(data);
  });

  function resetFilters() {
    filterSelectors.forEach(({ selector }) => {
      container.querySelector(selector).value = "";
    });
  }
 
}


// Estadísticas

const btnStats = container.querySelector("#button-facts");
btnStats.addEventListener("click", function () {

  // Llamar a las funciones
  const stats = computeStats(data);
  const countryStats = computeCountryStats(data);
  const genreStats = computeGenreStats(data);

  // Mostrar resultados en el modal
  const statsContainer = container.querySelector('#stats-container');
  statsContainer.innerHTML = renderStatsElement(stats, countryStats, genreStats);

  // Mostrar el modal
  const statsDialog = document.getElementById('statsDialog');
  statsDialog.setAttribute('open', 'true');

  // Función para cargar HTML con los datos
 function renderStatsElement(stats, countryStats, genreStats) {
  let statsHTML = '<div>';
  statsHTML += '<h3>ESTADÍSTICAS DE LAS ESCRITORAS</h3>';

 // Agregar estadísticas de países
  statsHTML += '<p><strong>Nacionalidad:</strong></p>';
  statsHTML += '<ul>';
  for (const country in countryStats) {
  statsHTML += `<li>${country}: ${countryStats[country]}</li>`;
  }
  statsHTML += '</ul>';

  // Agregar estadísticas de géneros
  statsHTML += '<p><strong>Géneros:</strong></p>';
  statsHTML += '<ul>';
  for (const genre in genreStats) {
  statsHTML += `<li>${genre}: ${genreStats[genre]}</li>`; 
  }
  statsHTML += '</ul>';

  statsHTML += '</div>';
  return statsHTML;
}

//Cierre del Modal
//Evento para cerrar el modal
const btnClose = container.querySelector("#button-close");
btnClose.addEventListener("click", function() {
const statsDialog = document.getElementById("statsDialog");
statsDialog.removeAttribute("open");
});

  
});
return container;
};
