//import { navigateTo } from "../router.js";
//import { communicateWithOpenAI } from "./../lib/openAIApi.js";
import data from "../data/dataset.js";


export const individual = () => {
  //console.log(data);

  // Crear el contenedor principal
  //const writerFilter = data.filter(data => data.name === data.name);
  const individualView = document.createElement('div');
  const individualChat = document.createElement("main");
  individualChat.innerHTML = `

  <div class="container">
    <div class="column-left">
      <img src=${data.imageUrl} alt=${data.name}/><br>
      <p>Texto en la primera columna</p>
    </div>

     <div class="column-right">
     <button id ="buttonBackHomeChat">Regresar</button><br>
      <div class="chat-header">
      </div>

      <h4 id="userId">Usuaria:</h4>
      <div class="chat-bubble-receives">Mensaje de usuaria</div>
      <h4 id="writerId">Escritora:</h4>
      <div class="chat-bubble-send">Mensaje escritora</div>
      

      <div class="chat-input">
        <textarea placeholder="Escribe tu mensaje..."></textarea>
        <button>Enviar</button>
      </div>
    </div>
  </div>
`;
  individualView.appendChild(individualChat);
  const buttonBackHomeChat = individualChat.querySelector("#buttonBackHomeChat");
  buttonBackHomeChat.addEventListener("click", () => {
    //console.log("botón regresar funciona");
    window.location.href = "index.html";
  });

  return individualView;
};
