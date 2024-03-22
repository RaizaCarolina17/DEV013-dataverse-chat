import { header } from "../components/header.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "../data/dataset.js";

export const group = (element) => {

  const groupView = document.createElement("div")
  groupView.className = "groupView"

  const headerElement = header();
  groupView.appendChild(headerElement);

  const containerChatG = document.createElement("div");
  containerChatG.className = "containerChatG";

  const credentialWriterG = document.createElement("div");
  credentialWriterG.className = "credentialWriterG";
  data.forEach(writer => {
    const imgChatGroup = document.createElement("img");
    imgChatGroup.className = "imgChatGroup"
    imgChatGroup.setAttribute("src", writer.imageUrl);
    imgChatGroup.setAttribute("alt", writer.name);
    credentialWriterG.appendChild(imgChatGroup);
  });

  const groupChat = document.createElement("div");
  groupChat.className = "groupChat";
  groupChat.innerHTML =
    `      
          <div class="chat-inputG">
            <textarea class= "texAreaChatG" placeholder="Escribe tu mensaje..."></textarea>
            <button class="SendButtomChat">Enviar</button>
          </div>    
          
          <div class  = "container-Buttoms-chat">
            <button id="buttonBackHomeChat">Regresar</button>
         </div>
     
        `;

  groupChat.appendChild(credentialWriterG);
  containerChatG.appendChild(credentialWriterG);
  containerChatG.appendChild(groupChat)
  groupView.appendChild(containerChatG);

  function messageUser() {
    const newMess = groupChat.querySelector(".texAreaChatG");
    const newMessTxt = newMess.value;
    const chat = groupChat.querySelector(".chat-inputG");

    if (newMessTxt !== "") {

      const userNameContainer = document.createElement("div");
      userNameContainer.className = "userNameContainer";

      const userName = document.createElement("div");
      userName.className = "userName";
      userName.innerHTML = "Usuaria:";
      userNameContainer.appendChild(userName);

      const containernewMess = document.createElement("div");
      containernewMess.className = "messUser";
      const viewMess = document.createElement("p");
      viewMess.className = "message";
      viewMess.innerHTML = newMessTxt;
      containernewMess.appendChild(viewMess);
      chat.appendChild(containernewMess);
      newMess.value = "";

      const writer = data.find(item => item.id === element.id);

      //llamada a openAi
      communicateWithOpenAI(newMessTxt, writer)
      console.log(writer)
        .then(response => {
          const nameSystem = document.createElement("div");
          nameSystem.className = "nameSystem";
          nameSystem.innerHTML = `${writer.name}:`;

          const systemMessage = document.createElement("div");
          systemMessage.className = "systemMessage";
          systemMessage.innerHTML = response.choices[0].message.content;
          chat.appendChild(nameSystem);
          chat.appendChild(systemMessage);
        })
        .catch(error => {
          console.error("error al comunicarse con la IA", error)
        })
    }
  }

  const SendButtomChat = groupChat.querySelector(".SendButtomChat");
  SendButtomChat.addEventListener("click", () => {
    console.log("funciona")
    messageUser();
  })

  const userInput = groupChat.querySelector(".texAreaChatG");
  userInput.addEventListener("keydown", (event) => {
    console.log("el input funciona")
    if (event.key === 'Enter') {
      messageUser();
    }
  })

  const buttonBackHomeChat = groupChat.querySelector("#buttonBackHomeChat");
  buttonBackHomeChat.addEventListener("click", () => {
    window.location.href = "index.html";
  })




  return groupView;
};