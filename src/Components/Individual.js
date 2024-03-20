//import { navigateTo } from "../router.js";
//import { communicateWithOpenAI } from "./../lib/openAIApi.js";
import data from "../data/dataset.js";

export const individual = (element) => {
  // console.log(element);
  // Filtrar datos basados en el elemento pasado como argumento
  const writer = data.find(item => item.id === element.id);
  // console.log(writer);
  // Crear el contenedor principal
  const individualView = document.createElement('div');
  const individualChat = document.createElement("main");
  individualChat.innerHTML = `

    <div class="container-chat-ind">
    
      <div class="credentialWriter">
        <div class="writer-img">
          <img src="${writer.imageUrl}"/>
        </div>
        <div class="nameWriter"> 
         <h1 class= "nameWriterc">${writer.name}</h1>
        </div>
        <div class="description-writer">
          <p>${writer.description}</p>
        </div>
      </div>

      <div class="chat">
        <div class="chat-input">
          <textarea id = "userInput" placeholder="Escribe tu mensaje..."></textarea>
          <button id = "SendButtomChat">Enviar</button>
        </div>
      </div>
      
    </div>

    <div class="container-Buttoms-chat">
     <button id="buttonchatGrupal">Chat grupal</button>
     <button id="buttonBackHomeChat">Regresar</button>
    </div>
 
  `;

  individualView.appendChild(individualChat);

  const SendButtomChat = individualChat.querySelector("#SendButtomChat");
  SendButtomChat.addEventListener("click", () => {
    console.log("el botón enviar funciona")
    messageUser();
  })

  const userInput = individualChat.querySelector("#userInput");
  userInput.addEventListener("keydown", (event) => {
    console.log("el input funciona")
    if (event.key === 'Enter') {
      messageUser();
    }
  })

  function messageUser() {
    const newMess = individualChat.querySelector("#userInput");
    const newMessTxt = newMess.value;
    const chat = individualChat.querySelector(".chat");

    if (newMessTxt !== "") {

      const userNameContainer = document.createElement("div");
      userNameContainer.className = "userNameContainer";
      const userName = document.createElement("p");
      userName.className = "userName";
      userName.innerHTML = "Usuaria:";
      userNameContainer.appendChild(userName);
      chat.appendChild(userName);

      const containernewMess = document.createElement("div");
      containernewMess.className = "messUser";
      const viewMess = document.createElement("p");
      viewMess.className = "message";
      viewMess.innerHTML = newMessTxt;
      containernewMess.appendChild(viewMess);
      chat.appendChild(containernewMess);
      newMess.value = "";
    }
  }

  const messageSystem = document.createElement("div");
  messageSystem.className = "message-system"


  const buttonBackHomeChat = individualChat.querySelector("#buttonBackHomeChat");
  buttonBackHomeChat.addEventListener("click", () => {
    window.location.href = "index.html";
  });


  return individualView;
}