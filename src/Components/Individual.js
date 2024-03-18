import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "./../lib/openAIApi.js";
import data from "../data/dataset.js";


export const individual = (element) => {
  // Filtrar datos basados en el elemento pasado como argumento
  const writerFilter = data.find(item => item.id === element.id);
  // Crear el contenedor principal
  const individualView = document.createElement('div');
  const individualChat = document.createElement("main");
  individualChat.innerHTML = `

    <div class="container">

      <div class="credentialWriter">
        <div class="writer-img">
          <img src="${writerFilter.imageUrl}" alt="${writerFilter.name}"/>
        </div>
        <div class="description-writer">
          <p>${writerFilter.description}</p>
        </div>
      </div>

      <div class="chat">
        <button id="buttonBackHomeChat">Salir del Chat</button><br>
        <div class="chat-header"></div>

        <h4 id="userId">Usuaria:</h4>
       
        <h4 id="writerId">${writerFilter.name}:</h4>
       
        <div class="chat-input">
          <textarea id = "userInput" placeholder="Escribe tu mensaje..."></textarea>
          <button id = "SendButtomChat">Enviar</button>
        </div>
      </div>
    </div>
  `;

  individualView.appendChild(individualChat);

  const writerId = individualChat.querySelector("#writerId");
  const userInput = individualChat.querySelector("#userInput");
  const SendButtomChat = individualChat.querySelector("#SendButtomChat");

  const sendMessFunct = async () => {
    //nameWrite.classList.remove("hide"); 
    //nameWrite.classList.add("show");
    const userInputValue = userInput.value;

    const questionUser = document.createElement('div')
    //questionUser.className = "userInput"
    questionUser.innerHTML = `<div class="chat-input">${userInputValue}</div>`

    const message = document.createElement("div");
    message.className = "system-txt-container"

    const openAiResponse = await communicateWithOpenAI(writerFilter[0].description, userInputValue);

    if (openAiResponse.data.choices[0].message.content === "error") {
      navigateTo("/error");
    } else {
      message.innerHTML = `
        <img src=${writerFilter[0].imageUrl} alt=${writerFilter[0].name}>
        <div class="system-txt">${openAiResponse.data.choices[0].message.content}</div>
    `
    }
    writerId.classList.add("hide");
    //nameWrite.classList.remove("show");
    //messageWindows.append(questionUser, message);
    userInput.value = "";
  }

  SendButtomChat.addEventListener("click", () => {
    if (userInput.value !== "") {
      sendMessFunct();
    }
  });

  userInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && userInput.value !== "") {
      sendMessFunct();
    }
  })

  const buttonBackHomeChat = individualChat.querySelector("#buttonBackHomeChat");
  buttonBackHomeChat.addEventListener("click", () => {
    window.location.href = "index.html";
  });

  return individualView;
};