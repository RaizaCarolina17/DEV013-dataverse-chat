// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { home } from "./views/Home.js";
import { error } from "./views/Error.js";
import { escritoras } from "./views/Escritoras.js";
import { group } from "./views/ChatGroup.js";

const viewContainer = document.getElementById("root");

const routes = {
  "/": home,
  "/error": error,
  "/escritoras": escritoras,
  "/group": group,
};

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", () => {
  onURLChange(window.location.pathname);
});

document.addEventListener("popstate", () => {
  onURLChange(window.location.pathname);
});