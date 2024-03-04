import { filterData, sortData } from "../lib/dataFunctions.js";
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

<div id="cardsContainer"> </div>
  `;

  const cardsContainer = container.querySelector("#cardsContainer");
  cardsContainer.appendChild(renderItems(data));

  //selecciona los elementos select
  const filterSelectors = [
    { selector: '[data-testid="filter-type"]', property: "mainField" },
    { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },

  ];

  let sortName;// Declaracion de sortName

  // Agrega EventListener para los select
  filterSelectors.forEach(({ selector }) => {
    const selectElement = container.querySelector(selector);
    selectElement.addEventListener("change", () => applyFilters());
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
  
  return container;
}



/*const typeSelect = container.querySelector("#type-select");
const countrySelect = container.querySelector("#country-select");

typeSelect.addEventListener("change", () => {
  //console.log("funciona")
  applyFilters();
});

countrySelect.addEventListener("change", () => {
  //console.log("funciona");
  applyFilters();
});

// Función para aplicar los filtros
function applyFilters() {
  const typeFilter = typeSelect.value;
  const countryFilter = countrySelect.value;

  console.log("Type Filter:", typeFilter);
  console.log("Country Filter:", countryFilter);

  // Llama a la función filterData
  const filteredData = filterData(data, "type", typeFilter);

  // Renderiza los elementos con los datos actualizados
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(renderItems(filteredData));
}

return container;
}*/
