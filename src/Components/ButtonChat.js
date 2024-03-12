//import { navigateTo } from "../router.js";

export const createBtnChat = () => {
  const btnChatInd = document.createElement("button");
  btnChatInd.id = "button-chatIndividual";
  btnChatInd.className = "button-chat";
  btnChatInd.textContent = "CHAT"; 
  btnChatInd.addEventListener("click", () => {
    const modalApiKeyIndividual = document.createElement("dialog");
    modalApiKeyIndividual.id = "modalApiKeyIndividual";
    modalApiKeyIndividual.innerHTML = `
      <div class="modalApiKey" id="modalApiKey">
        <div id="sendKey"></div>
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Regresar</button>
      </div>
    `;
    document.body.appendChild(modalApiKeyIndividual);
    modalApiKeyIndividual.showModal();

    const buttonBackHome = modalApiKeyIndividual.querySelector('#button-back-home');
    buttonBackHome.addEventListener('click', () => {
      //console.log("Botón regresar funciona");
      modalApiKeyIndividual.style.display = 'none';
      modalApiKeyIndividual.close();
    })

  });
  return btnChatInd;
};

