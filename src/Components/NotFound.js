import { navigateTo } from "../router.js";

export const notFound = () => {
  const notFoundElement = document.createElement("div");
  notFoundElement.id = "notFound";
  notFoundElement.innerHTML = `
    <h1 class="error">ERROR 404</h1>  
    <h3>Lo sentimos, la página que buscas no existe</h3>
    <img class="error-image" src="./data/img/escritora.png"> <br>
    <button id="goHome">Ir a Inicio</button> <br>
  `;
  
  // Agregar evento de clic al botón "Ir a Inicio"
  /*const goHomeButton = notFoundElement.querySelector("#goHome");
  goHomeButton.addEventListener("click", () => {
  console.log("Botón Ir a Inicio clickeado");
  console.log("Navegando a /Home.js");
  navigateTo("/Home.js"); // Ajusta la ruta según sea necesario
  }); */

  return notFoundElement;
};
