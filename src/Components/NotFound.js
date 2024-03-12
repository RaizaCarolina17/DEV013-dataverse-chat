export const notFound = () => {
    const notFoundElement = document.createElement("div");
    notFoundElement.id = "notFound";
    notFoundElement.innerHTML = `
    <h1 class="error">ERROR 404</h1>  
    <h3>Lo sentimos, la página que buscas no existe</h3>
    <img class="error-image" src="./data/img/escritora.png"> <br>
    <button id="goHome" onclick="navigateTo('/Home.js')">Ir a Inicio</button> <br>
    `;
  
    return notFoundElement;
  };