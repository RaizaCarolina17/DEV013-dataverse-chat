import { header } from "../components/header.js";
import { footer } from "../components/footer.js";
import { individual } from "../Components/Individual.js";

export const escritoras = (element) => {
  // console.log(element);
  const escritorasView = document.createElement("div");
  escritorasView.className = "viewComponent";
  
  const headerElement = header();
  escritorasView.appendChild(headerElement);

  const IndividualElement = individual(element);
  escritorasView.appendChild(IndividualElement);

  const footerElement = footer();
  escritorasView.appendChild(footerElement);

  return escritorasView;
};