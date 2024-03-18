import { navigateTo } from "../router.js";

export const notFound = () => {
  const notFoundElement = document.createElement("div");
  notFoundElement.id = "notFound";
  notFoundElement.innerHTML = `
    <h1 class="error">ERROR 404</h1>  
    <h3>Lo sentimos, la página que buscas no existe</h3>
    <img class="error-image" src="./data/img/escritora.png"> <br>
    <button id="button-goHome" onclick="navigateTo('/Home.js')">Regresar</button> <br>
  `;
  
  const buttonGoHome = notFoundElement.querySelector("#button-goHome");
  buttonGoHome.addEventListener("click", () => {
    window.location.href = "index.html";
  });


  return notFoundElement;
};
