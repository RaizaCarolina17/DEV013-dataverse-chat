export const notFound = () => {
  const notFoundElement = document.createElement("div");
  notFoundElement.id = "notFound";
  notFoundElement.innerHTML = `
  <h1> NOT FOUND </h1>
  <img class="error-image" src="./data/img/error_404.jpeg"> <br>
  <button id="button-goHome" onclick="navigateTo('/Home.js')">Regresar</button> <br>
  `;

  return notFoundElement;
};
