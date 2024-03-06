import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import data from './../data/dataset.js';
import { renderItems } from "../components/renderItems.js";

export const BtnContainer = () => {
  const container = document.createElement("div");
  container.id = "BtnContainer";
  container.innerHTML = `
    <h4>
      <div id="containerSelects" class="form-container">
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
        <button class="btn-chat" id="button-chatGroup"> CHAT GRUPAL</button>
      </div>
    </h4>

    <div id="cardsContainer"> </div>
  `;

  const cardsContainer = container.querySelector("#cardsContainer");
  cardsContainer.appendChild(renderItems(data));

  // Selecciona los elementos select
  const filterSelectors = [
    { selector: '[data-testid="filter-type"]', property: "mainField" },
    { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
    { selector: '[data-testid="select-sort"]', property: "name" },
  ];

  let sortConfig = {
    sortBy: "name",
    sortOrder: "asc",
  };

  let filteredData;
  filteredData= [...data];

  // Agrega EventListener para los select
  filterSelectors.forEach(({ selector }) => {
    const selectElement = container.querySelector(selector);
    selectElement.addEventListener("change", applyFilters);
  });

 /* /////EventListener para el select de ordenar/////
  const sortSelect = container.querySelector('[data-testid="select-sort"]');
  sortSelect.addEventListener("change", () => {
    sortConfig.sortOrder = sortSelect.value === "asc" ? "asc" : "desc";
    const dataSort = sortData(data, sortConfig);
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderItems(dataSort));
  });*/

  // Función para aplicar los filtros
  function applyFilters() {
    const filters = filterSelectors.map(({ selector, property }) => ({
      property,
      value: container.querySelector(selector).value,
    }));

    let filteredData = [...data];
    filters.forEach(({ property, value }) => {
      if (value) {
        filteredData = filterData(filteredData, property, value);
      }
    });

    filteredData = sortData(filteredData, sortConfig);
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(renderItems(filteredData));

    function renderCardsContainer() {
      cardsContainer.innerHTML = "";
      const resultList = renderItems(data);
      cardsContainer.appendChild(resultList);
    }

    /////EventListener para el select de ordenar/////
  const sortSelect = container.querySelector('[data-testid="select-sort"]');
  sortSelect.addEventListener("change", () => {
    sortConfig.sortOrder = sortSelect.value === "asc" ? "asc" : "desc";
    cardsContainer.innerHTML = "";
    const dataSort = sortData(data, sortConfig);
    cardsContainer.appendChild(renderItems(dataSort));
  });

    const btnClear = container.querySelector("#button-clear");
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

  //Estadísticas
  // EventListener para el botón de estadísticas
  const btnStats = container.querySelector("#button-facts");
  btnStats.addEventListener("click", function () {
    //console.log('ok stats');
    try {
      const stats = computeStats(data);
      renderStats(stats);
    } catch (error) {
      console.error("Error al calcular estadísticas:", error);
    }
  });

  // Función para renderizar las estadísticas en el contenedor
function renderStats(stats) {
  // Obtener la referencia al contenedor de estadísticas por su id
  const statsContainer = container.querySelector('#stats-container');

  // Verificar si el contenedor de estadísticas existe
  if (statsContainer) {
    // Limpiar contenido anterior
    statsContainer.innerHTML = '';

    // Mostrar las estadísticas en el contenedor
    statsContainer.appendChild(renderStatsElement(stats));
  }

  // Función para renderizar las estadísticas como elementos HTML
  function renderStatsElement(stats) {
    const statsElement = document.createElement('div');
    statsElement.innerHTML = '<b>ESTADÍSTICAS</b>';
    // Agregar estadísticas de países
    statsElement.appendChild(renderStatsCategory('📶 Cantidad de escritoras por nacionalidad', stats.countries));
    // Agregar estadísticas de géneros
    statsElement.appendChild(renderStatsCategory('📶 Cantidad de escritoras por género literario', stats.genres));

    return statsElement;  // Agrega esta línea para devolver el elemento
  }

  // Función para renderizar estadísticas de una categoría específica
  function renderStatsCategory(categoryName, categoryStats) {
    const categoryElement = document.createElement('div');
    categoryElement.innerHTML = `<b>${categoryName}:</b>`;

    // Iterar sobre las estadísticas y agregarlas al elemento
    for (const item in categoryStats) {
      const itemStats = categoryStats[item];
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item}: ${itemStats}`;
      categoryElement.appendChild(itemElement);
    }

    return categoryElement;  // Agrega esta línea para devolver el elemento
  }

  function clearStats() {
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = '';
    }
  }

  // Abrir pantalla emergente
  const statsDialog = container.querySelector('#statsDialog');
  btnStats.addEventListener('click', () => {
    statsDialog.showModal();
  });

  // Cierra el modal
  const closeButton = document.getElementById('button-close');
  closeButton.addEventListener('click', () => {
    closeStatsDialog();
  });

  statsDialog.addEventListener('click', (event) => {
    if (event.target === statsDialog) {
      closeStatsDialog();
    }
  });

  // Función para cerrar el modal de estadísticas
  function closeStatsDialog() {
    statsDialog.close();
  }
}
  return container;
};