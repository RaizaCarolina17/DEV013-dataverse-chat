import { header } from "../components/header.js";
import { menu } from "../Components/menu.js";
//import { renderItems } from "../components/renderItems.js"; 
//import data from './../data/dataset.js';
import { footer } from "../components/footer.js";
//import { filterData, sortData, computeStats, computeCountryStats, computeGenreStats } from "../lib/dataFunctions.js";


/*export const home = () => {
  const p = document.createElement('p');
  p.innerHTML = "Hola Mundo. Este es nuestro HOME";
  return p
};*/

export const home = () => {
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";

  const headerElement = header();
  homeView.appendChild(headerElement);

  const menuElement = menu();
  homeView.appendChild(menuElement);

  const footerElement = footer();
  homeView.appendChild(footerElement);

  return homeView;
};