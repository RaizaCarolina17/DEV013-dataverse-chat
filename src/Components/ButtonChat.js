//import { navigateTo } from "../router.js";

export const createBtnChat = () => {
  const btnChatInd = document.createElement("button");
  btnChatInd.id = "button-chatIndividual";
  btnChatInd.className = "button-chat";
  btnChatInd.textContent = "CHAT"; // Agrega el texto al botón
  btnChatInd.addEventListener("click", () => {
    // Aquí puedes agregar la funcionalidad del botón, por ejemplo: navigateTo();
    console.log("Botón CHAT clickeado");
  });
  return btnChatInd;
};

/*
<button class="btn-chat" id="button-chat"> CHAT</button>

<dialog id="modalApiKeyIndividual">
    <div class="modalApiKey" id="modalApiKey">
      <div id="sendKey"></div>
      <input type="text" id="ApiKey" name="ApiKey" placeholder ="Ingresa tu API KEY" />
      <button data-testid="button-send" id="button-send">Enviar</button>
      <button data-testid="button-back-home" id="button-back-home">Regresar</button>
    </div>
  </dialog>*/