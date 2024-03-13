export const ApiModal = () => {
    //Creación del modal//
    const modalApi = document.createElement("dialog");
    modalApi.id = "modalApiKey";
    modalApi.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modalApiKey");

    modalContent.innerHTML = `
        <div id="sendKey"></div>
        <input type="text" id="ApiKey" name="ApiKey" placeholder="Ingresa tu API KEY" />
        <button data-testid="button-send" id="button-send">Enviar</button>
        <button data-testid="button-back-home" id="button-back-home">Regresar</button>
    `;

    modalApi.appendChild(modalContent); // Usar modalApi en lugar de modalElement

    // Obtener referencia a los botones dentro del modal
    const buttonSend = modalContent.getElementById("button-send");
    const buttonBackHome = modalContent.getElementById("button-back-home");

    // Event listener para abrir el modal al hacer clic en el botón "CHAT GRUPAL"
    buttonSend.addEventListener("click", () => {
        modalApi.close(); // Cerrar el modal después de enviar
    });

    // Event listener para cerrar el modal al hacer clic en el botón "Regresar"
    buttonBackHome.addEventListener("click", () => {
        modalApi.close();
    });

    document.addEventListener('showModalIndividual', () => {
        const modalApiKeyIndividual = document.getElementById('modalApiKeyIndividual');
        if (modalApiKeyIndividual) {
            modalApiKeyIndividual.showModal();
        } else {
            console.error('El modal con ID modalApiKeyIndividual no se encontró en el DOM.');
        }
    });

    return modalApi;
};
