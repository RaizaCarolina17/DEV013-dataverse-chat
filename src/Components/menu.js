import { filterData, sortData, computeStats } from "../lib/dataFunctions.js";
import data from '../data/dataset.js';
import { renderItems } from "./renderItems.js";
import { ApiModal } from "./ApiModal.js";


export const menu = () => {
  const container = document.createElement("div");
  container.id = "menu";
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
        <button class="btn-chat" id="button-chatGroup"> CHAT GRUPAL</button>
      </div>
    </h4>

    
   
    <div id="cardsContainer"> </div>
  `;

  const dataList = container.querySelector("#cardsContainer");
  let result = data;
  dataList.appendChild(renderItems(data));

  /////MODAL API KEY/////
  // EventListener para el botón de chat grupal
const buttonChatGroup = container.querySelector('#button-chatGroup');
buttonChatGroup.addEventListener("click", () => {
  const apiModal = ApiModal(); // Crear una instancia del modal
  document.body.appendChild(apiModal); // Agregar el modal al cuerpo del documento
  apiModal.showModal(); // Mostrar el modal

  // EventListener para cerrar el modal al hacer clic en el botón "Regresar"
  const buttonBackHome = apiModal.querySelector('#button-back-home');
  buttonBackHome.addEventListener('click', () => {
    apiModal.close(); // Cerrar el modal
  });
});

// Cerrar el modal al hacer clic en el botón "Regresar"
document.addEventListener("click", function(event) {
  if (event.target.id === "button-back-home") {
    const modalApi = document.getElementById("modalApiKey");
    modalApi.close(); // Cerrar el modal si se hizo clic en el botón "Regresar"
  }
});


  // Selecciona los elementos select
  const filterSelectors = [
    { selector: '[data-testid="filter-type"]', property: "mainField" },
    { selector: '[data-testid="filter-data"]', property: "countryNacimiento" },
    //{ selector: '[data-testid="select-sort"]', property: "name" },
  ];

  let sortName;// Declaracion de sortName

  // Agrega EventListener para los select
  filterSelectors.forEach(({ selector }) => {
    const selectElement = container.querySelector(selector);
    selectElement.addEventListener("change", () => applyFilters());
    //selectElement.addEventListener("change", applyFilters);
  });

  // EventListener para el botón de limpiar
  const btnClear = container.querySelector("#button-clear");
  btnClear.addEventListener("click", function () {
    // Limpia los filtros y renderiza los datos originales
    resetFilters();
    renderItems(data);
  });

  // Función para restablecer los filtros
  function resetFilters() {// Recorre los selectores y establece sus valores en vacío
    filterSelectors.forEach(({ selector }) => {
      container.querySelector(selector).value = "";
    });
    sortName.value = "none";
    result = sortData(data, "name", "asc");
    renderDataList();
  }

  // Función para aplicar los filtros
  function applyFilters() {
    // Obtén los valores seleccionados de los elementos select
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
    dataList.innerHTML = "";

    // Renderiza los datos filtrados
    dataList.appendChild(renderItems(filteredData));

    // Realiza el ordenamiento de datos
    sortName = container.querySelector('[data-testid="select-sort"]');
    const sortOrder = sortName.value;
    result = sortData(filteredData, { sortBy: "name", sortOrder });

    // Renderiza los datos filtrados y ordenados
    renderDataList();
  }

  // Ordenamiento descendente y ascendente
  sortName = container.querySelector('[data-testid="select-sort"]');
  sortName.addEventListener("change", () => {
    applyFilters(); // Actualiza la lista al cambiar el ordenamiento
  });

  function renderDataList() { // Función para renderizar la lista con los datos actuales
    dataList.innerHTML = "";
    const resultList = renderItems(result);
    dataList.appendChild(resultList);
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
      //console.error("Error al calcular estadísticas:", error);
    }
  });

  // Función para renderizar las estadísticas en el contenedor
  function renderStats(stats) {
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

    // Abrir pantalla emergente
    const statsDialog = container.querySelector('#statsDialog');
      statsDialog.showModal();

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

  //Modal de ApiKey//

  /*function handleOpenApiModal(apiModal) {
    console.log("Se hizo clic en el botón 'CHAT GRUPAL'");
    
    apiModal.showModal(); // Mostrar el modal
    
    // EventListener para cerrar el modal al hacer clic en el botón "Regresar"
    const buttonBackHome = apiModal.querySelector('#button-back-home');
    buttonBackHome.addEventListener('click', () => {
        apiModal.close(); // Cerrar el modal
    });
  }
  
  // EventListener para el botón de chat grupal
  const buttonChatGroup = container.querySelector('#button-chatGroup');
  buttonChatGroup.addEventListener("click", () => {
    const apiModal = ApiModal(); // Crear una instancia del modal
    document.body.appendChild(apiModal); // Agregar el modal al cuerpo del documento
    handleOpenApiModal(apiModal); // Manejar el modal
  });
  
  // Código para cerrar el modal al hacer clic en el botón "Regresar"
  document.addEventListener("click", function(event) {
      if (event.target.id === "button-back-home") {
          const modalApi = document.getElementById("modalApiKey");
          modalApi.close(); // Cerrar el modal si se hizo clic en el botón "Regresar"
      }
  });

  /*const buttonChatGroup = container.querySelector('#button-chatGroup');
  const modalApiKey = container.querySelector('#modalApiKey');

  modalApiKey.style.display = 'none';
  buttonChatGroup.addEventListener('click', () => {
    //console.log("botón chat funciona")
    modalApiKey.style.display = 'block';
    modalApiKey.showModal();
  });

  const buttonBackHome = container.querySelector('#button-back-home');
  buttonBackHome.addEventListener('click', () => {
    //console.log("Botón regresar funciona");
    modalApiKey.style.display = 'none';
    modalApiKey.close();
  })*/

  return container;
};