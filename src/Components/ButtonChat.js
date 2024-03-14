import { ApiModal } from "./ApiModal.js";

export const createBtnChat = () => {
  const btnChatInd = document.createElement("button");
  btnChatInd.id = "button-chatIndividual";
  btnChatInd.className = "button-chat";
  btnChatInd.textContent = "CHAT"; 

  //Agregar evento
  btnChatInd.addEventListener("click", () => {
    const apiModal = ApiModal(); // Crear una instancia del modal
    document.body.appendChild(apiModal); // Agregar el modal al cuerpo del documento
    apiModal.showModal(); // Mostrar el modal
  });

  return btnChatInd;
};