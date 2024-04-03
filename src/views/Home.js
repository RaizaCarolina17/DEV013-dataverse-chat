
import { header } from "../components/header.js";
import { menu } from "../Components/menu.js";
import { footer } from "../components/footer.js";

export const home = () => {
  const homeView = document.createElement("div");
  homeView.className = "viewComponent";

  const headerElement = header();
  homeView.appendChild(headerElement);

  const menuElement = menu();
  homeView.appendChild(menuElement);

  const footerElement = footer();
  homeView.appendChild(footerElement);

  return homeView;
};