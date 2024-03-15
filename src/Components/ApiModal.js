export const ApiModal = () => {
  const modalApiKey = document.createElement("dialog");
  modalApiKey.id = "modalApiKey";
  const modalContent = document.createElement("div");
  modalApiKey.innerHTML = `
      <div class="modalApiKey" id="modalApiKey">
        <div id="sendKey"></div>
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Regresar</button>
      </div>
    `;
  modalApiKey.appendChild(modalContent);

  //const buttonSend = modalContent.querySelector("#button-send");
  const buttonBackHome = modalApiKey.querySelector("#button-back-home");

  /*// Event listener para abrir el modal al hacer clic en el botón "Enviar"
  buttonSend.addEventListener("click", () => {
    const apiKeyInput = modalContent.querySelector("#ApiKey");
    const apiKey = apiKeyInput.value;
    // Aquí puedes realizar la acción correspondiente con la API Key ingresada
    modalApiKey.close(); // Cerrar el modal después de enviar
  });*/

  buttonBackHome.addEventListener("click", () => {
    //console.log ("regresar funcionando");
    modalApiKey.style.display = 'none';
    modalApiKey.close();
  });
  return modalApiKey;
};