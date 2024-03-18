// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/Home.js";
import { error } from "./views/Error.js";
import {escritoras} from "./views/Escritoras.js";
//import {individual} from "./views/individual.js";
//import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';
//import { renderItems } from "../components/renderItems.js";
//import data from '../data/dataset.js';

const viewContainer = document.getElementById("root");

const routes = {
  "/": { component: home, title: "Escritoras | Home" },
  "/error": { component: error, title: "Escritoras | NotFound" },
  "/escritoras": { component: escritoras, title: "Escritoras | Escritoras" },
  //"/individual": { component: individual, title: "Escritoras | Individual" },
  // "/api": { component: apiConfig, title: "Escritoras | API Configuration" },
};

setRoutes(routes);
setRootElement(viewContainer);


document.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location);
});

document.addEventListener("popstate", () => {
  onURLChange(window.location);
});

