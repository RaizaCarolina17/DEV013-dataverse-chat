import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { notFound } from "../components/notFound.js";


/*export const error = () => {
    const p = document.createElement('p');
    p.innerHTML= "Hola Mundo";
    return p
 };*/

export const error = () => {
  const errorView = document.createElement("div");
  errorView.className = "viewComponent";

  const headerElement = header();
  errorView.appendChild(headerElement);

  const notFoundElement = notFound();
  errorView.appendChild(notFoundElement);

  const footerElement = footer();
  errorView.appendChild(footerElement);

  return errorView;
};