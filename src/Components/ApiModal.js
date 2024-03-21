import { navigateTo } from "../router.js";
//import { getApiKey } from "../lib/apiKey.js";


export const ApiModal = (element) => {
  //console.log(element)
  const modalApiKey = document.createElement("dialog");
  modalApiKey.id = "modalApiKey";
  const modalContent = document.createElement("div");
  modalApiKey.innerHTML = `
      <div class="modalApiKey" id="modalApiKey">
        <div id="sendKey"></div>
        <input type="nameUser" id="nameUser" name="nameUSer" placeholder="Ingresa tu nombre" />
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Cerrar</button>
      </div>
    `;
  modalApiKey.appendChild(modalContent);

  const buttonSendChat = modalApiKey.querySelector("#button-send");
  const buttonBackHome = modalApiKey.querySelector("#button-back-home");

  buttonSendChat.addEventListener("click", () => {
    //console.log("enviar funciona");
    const nameUser = modalApiKey.querySelector("#nameUser").value;
    const apiKey = modalApiKey.querySelector("#ApiKey").value;
    //console.log(ApiKey)
    if (apiKey === "" || nameUser === "") {
      alert("Ingrese una clave válida")
    } else {
      navigateTo(`/escritoras?id=${element.id}`, element);
      modalApiKey.style.display = 'none';
      modalApiKey.close();
    }
  }
  );

  /*if (getApiKey()) {
    navigateTo(`/escritoras?id=${element.id}`, element);
  } else {
    navigateTo("/error", {});
  }*/

  buttonBackHome.addEventListener("click", () => {
    //console.log ("regresar funcionando");
    modalApiKey.style.display = 'none';
    modalApiKey.close();
  });
  return modalApiKey;
};