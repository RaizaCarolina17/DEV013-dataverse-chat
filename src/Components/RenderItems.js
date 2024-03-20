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
  const modalApiKey = document.createElement("dialog");
  modalApiKey.id = "modalApiKey";
  const modalContent = document.createElement("div");
  modalApiKey.innerHTML = `
      <div class="modalApiKey" id="modalApiKey">
        <div id="sendKey"></div>
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Cerrar</button>
      </div>
    `;
  modalApiKey.appendChild(modalContent);

  const buttonSendChat = modalApiKey.querySelector("#button-send");
  const buttonBackHome = modalApiKey.querySelector("#button-back-home");

  buttonSendChat.addEventListener("click", () => {
    console.log("enviar funciona");
    if (getApiKey()) {
      navigateTo(`/escritoras?id=${element.id}`, element);
    } else {
      alert("La clave es incorrecta")
      //navigateTo("/error", {});
    }
  }),

  buttonBackHome.addEventListener("click", () => {
    //console.log ("regresar funcionando");
    modalApiKey.style.display = 'none';
    modalApiKey.close();
  })

  return modalApiKey;
};
