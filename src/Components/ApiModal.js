import { navigateTo } from "../router.js";
import { setApiKey } from "../lib/apiKey.js";


export const ApiModal = (element, redirectGroup) => {
  //console.log(element);
  const modalApi = document.createElement("dialog");
  modalApi.id = "modalApiKey";
  const modalContent = document.createElement("div");
  modalApi.innerHTML = `

      <h4>Te invitamos a crear una Api Key para que puedas chatear con las escritoras</h4>
      <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
      <button data-testid="button-send" id="button-send">Enviar</button>
      <button data-testid="button-back-home" id="button-back-home">Cerrar</button>
    `;
modalApi.appendChild(modalContent);
  
    const buttonSendChat = modalApi.querySelector("#button-send");
    const buttonBackHome = modalApi.querySelector("#button-back-home");
  
buttonSendChat.addEventListener("click", () => {
        //console.log("enviar funciona");
        //const nameUser = modalApi.querySelector("#nameUser").value;
        const apiKeyValue = modalApi.querySelector("#ApiKey").value;
        //console.log(ApiKey)

        if (apiKeyValue === "" || apiKeyValue.length <= 50 || apiKeyValue.length >= 55 ) {
          alert("Ingrese una clave válida");
          return
        }
        setApiKey(apiKeyValue);
        navigateTo(`/escritoras?id=${element.id}`, element);
        modalApi.style.display = 'none';
        modalApi.close();
      }
      );
    
      buttonBackHome.addEventListener("click", () => {
        //console.log ("regresar funcionando");
        modalApi.style.display = 'none';
        modalApi.close();
      });
      return modalApi;
    };