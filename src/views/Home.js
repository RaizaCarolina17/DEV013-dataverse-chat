
import { header } from "../components/header.js";
import { BtnContainer } from "../components/BtnContainer.js";
import { renderItems } from "../components/renderItems.js"; 
//import data from './data/dataset.js';
import { footer } from "../components/footer.js";


/*export const home = () => {
  const p = document.createElement('p');
  p.innerHTML = "Hola Mundo. Este es nuestro HOME";
  return p
};*/

export const home = () => {
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";

  const headerElement = header();
  homeView.appendChild(headerElement);

  const BtnContainerElement = BtnContainer();
  homeView.appendChild(BtnContainerElement);

  /*const RenderItemsElement = renderItems(data); 
  homeView.appendChild(RenderItemsElement);
  */

  const footerElement = footer();
  homeView.appendChild(footerElement);

  return homeView;
};