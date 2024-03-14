//import { navigateTo } from "../router.js";

export const createBtnChat = () => {
  const btnChatInd = document.createElement("button");
  btnChatInd.id = "button-chatIndividual";
  btnChatInd.className = "button-chat";
  btnChatInd.textContent = "CHAT"; 
  btnChatInd.addEventListener("click", () => {


  });
  return btnChatInd;
};