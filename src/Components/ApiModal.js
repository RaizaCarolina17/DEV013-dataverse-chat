export const ApiModal = () => {
    // Creación del modal
    const modalApi = document.createElement("dialog");
    modalApi.id = "modalApiKey";
    modalApi.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalApiKey");

    modalContent.innerHTML = `
        <div id="sendKey"></div>
        <h4>Te invitamos a crear una Api Key para que puedas chatear con las escritoras</h4>
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Regresar</button>
    `;

    modalApi.appendChild(modalContent);

    // Obtener referencia a los botones dentro del modal
    const buttonSend = modalContent.querySelector("#button-send");
    const buttonBackHome = modalContent.querySelector("#button-back-home");

    // Event listener para abrir el modal al hacer clic en el botón "Enviar"
    buttonSend.addEventListener("click", () => {
        const apiKeyInput = modalContent.querySelector("#ApiKey");
        const apiKey = apiKeyInput.value;
        // Aquí puedes realizar la acción correspondiente con la API Key ingresada
        console.log("API Key ingresada:", apiKey);
        modalApi.close(); // Cerrar el modal después de enviar
    });

    // Event listener para cerrar el modal al hacer clic en el botón "Regresar"
    buttonBackHome.addEventListener("click", () => {
        //console.log("Botón 'Regresar' clickeado"); // Agrega este console.log para depurar
        modalApi.style.display = 'none';
        modalApi.close();
    });

    //console.log("Modal agregado al DOM"); // Agrega este console.log para depurar

    return modalApi;
};