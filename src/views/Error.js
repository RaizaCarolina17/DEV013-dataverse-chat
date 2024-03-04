import { header } from "../Components/Header.js";
import { footer } from ".././Components/footer.js";

export const error = () => {
    // Crear el contenedor principal
  const errorView = document.createElement('div');

    // Agregar el header al inicio
    const headerElement = header();
    errorView.appendChild(headerElement);

    // Agregar el contenido de error
    const errorContent = document.createElement('div');
    errorContent.className = 'error-content';
    errorContent.innerHTML = `
      <img class="error-image" src="./data/img/error_404.png"> <br>
      <button id="goHome" onclick="navigateTo('/Home.js')">Ir a Inicio</button> <br>
    `;
    errorView.appendChild(errorContent);

    // Agregar el footer al final
    const footerElement = footer();
    errorView.appendChild(footerElement);

  return errorView;
};
  