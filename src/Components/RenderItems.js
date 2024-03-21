//import { navigateTo } from "../router.js";
import { ApiModal } from "./ApiModal.js";
//import { getApiKey } from "../lib/apiKey.js";

export const renderItems = (data) => {

  const list = document.createElement("ul");
  data.forEach(element => {
    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemList.classList.add("card");

    itemContainer.innerHTML = `
        <img src=${element.imageUrl} alt=${element.name}/><br>
        <dd itemprop="name">${element.name}</dd><br>
        <dd itemprop="DescripciónC"> ${element.shortDescription}</dd><br>
        <dt> Nacionalidad:</dt><dd itemprop="country">${element.facts.countryNacimiento}</dd>
        <dt>Género literario:</dt><dd itemprop="genero">${element.facts.mainField}</dd> <br>
     `;

    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "escritoras");
    itemList.setAttribute("itemtype", "https://schema.org/Person");
    list.setAttribute("itemtype", "https://schema.org/Person");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList);

    itemList.addEventListener("click", () => {
      const apiModal = ApiModal(element);
      document.body.appendChild(apiModal);
      apiModal.showModal();
      //console.log("funciona")
    })

  });

  return list;
};