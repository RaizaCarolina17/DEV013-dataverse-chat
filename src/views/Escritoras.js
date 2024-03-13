import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

/*export const error = () => {
    const p = document.createElement('p');
    p.innerHTML= "Hola Mundo";
    return p
 };*/

export const escritoras = () => {
  const escritorasView = document.createElement("div");
  escritorasView.className = "viewComponent";

  const headerElement = header();
  escritorasView.appendChild(headerElement);


  const footerElement = footer();
  escritorasView.appendChild(footerElement);

  return escritorasView;
};