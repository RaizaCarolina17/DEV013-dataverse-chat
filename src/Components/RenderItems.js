//import { createBtnChat } from "../components/ButtonChat.js";
import { navigateTo } from "../router.js";
import { getApiKey } from "../lib/apiKey.js";

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

    // Agrega el botón a cada card
    itemList.appendChild(itemContainer);
    list.appendChild(itemList);

    itemList.addEventListener("click", () => {
      //console.log("funciona")
      const apiModal = ApiModal(element);
      document.body.appendChild(apiModal);
      apiModal.showModal();
  })

    itemList.appendChild(itemContainer);
    list.appendChild(itemList)
  })
  
  return list;
};

export const ApiModal = (element) => {
  const modalApi = document.createElement("dialog");
  modalApi.id = "modalApiKey";
  const modalContent = document.createElement("div");
  modalApi.innerHTML = `
  <div id="sendKey"></div>
    <h4>Te invitamos a crear una Api Key para que puedas chatear con las escritoras</h4>
    <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
    <button data-testid="button-send" id="button-send">Enviar</button>
    <button data-testid="button-back-home" id="button-back-home">Cerrar</button>
  `;
  modalApi.appendChild(modalContent);

  const buttonSendChat = modalApi.querySelector("#button-send");
  const buttonBackHome = modalApi.querySelector("#button-back-home");

  buttonSendChat.addEventListener("click", () => {
    console.log("enviar funciona");
    if (getApiKey()) {
      navigateTo(`/escritoras?id=${element.id}`,element);
    } else {
      alert("La clave es incorrecta")
      //navigateTo("/error", {});
    }
  }),

  buttonBackHome.addEventListener("click", () => {
    //console.log ("regresar funcionando");
    modalApi.style.display = 'none';
    modalApi.close();
  })

  return modalApi;

};