// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/Home.js";
import { error } from "./views/Error.js";
import { escritoras } from "./views/Escritoras.js";
//import { group } from "./views/ChatGroup.js";
//import {individual} from "./views/individual.js";
//import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';
//import { renderItems } from "../components/renderItems.js";


const viewContainer = document.getElementById("root");

const routes = {
  "/": home,
  "/error": error,
  "/escritoras": escritoras,
  //"/ChatGroup": group,
};

setRoutes(routes);
setRootElement(viewContainer);


document.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location.pathname);
});

document.addEventListener("popstate", () => {
  onURLChange(window.location.pathname);
});

