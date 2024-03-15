//import { navigateTo } from "../router.js";
//import { header } from "../Components/Header.js";
//mport { footer } from "../components/footer.js";
import data from "../data/dataset.js";

export const individual = () => {
  //console.log(data);

  // Crear el contenedor principal
  const individualView = document.createElement('div');
  const individualChat = document.createElement("main");
  individualChat.innerHTML = `

  <div class="container">
    <div class="column-left">
      <img src=${data.imageUrl} alt=${data.name}/><br>
      <p>Texto en la primera columna</p>
    </div>

     <div class="column-right">
     <button id ="buttonBackHomeChat">Regresar</button>
      <div class="chat-header">
      <p>Chateando con:</p>
      </div>

      <div class="chat-bubble-receives">Mensaje de chat</div>
      <div class="chat-bubble-send">Respuesta del chat</div>
      

      <div class="chat-input">
        <textarea placeholder="Escribe tu mensaje..."></textarea>
        <button>Enviar</button>
      </div>
    </div>
  </div>
`;
  individualView.appendChild(individualChat);


  // Agregar el footer al final
  //const footerElement = footer();
  //individualView.appendChild(footerElement);

  return individualView;
};
