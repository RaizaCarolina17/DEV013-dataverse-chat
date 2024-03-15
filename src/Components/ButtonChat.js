//import { navigateTo } from "../router.js";
//import { ApiModal } from "../components/ApiModal.js";
import { ApiModal } from "./ApiModal.js";

export const createBtnChat = () => {
  const btnChat = document.createElement("button");
  btnChat.id = "button-chat";
  btnChat.className = "button-chat";
  btnChat.textContent = "CHAT";
  btnChat.addEventListener("click", () => {
    //console.log("funciona");
    const modalApiKey = ApiModal();
    document.body.appendChild(modalApiKey);
    modalApiKey.showModal();
  });
  return btnChat;
};


