/*import { navigateTo } from "../router.js";
import { header } from "../Components/Header.js";
import { footer } from "../components/footer.js";
import data from "../data/dataset.js";

export const individual = () => {
  //console.log(data);

  // Crear el contenedor principal
  const individualView = document.createElement('div');

  // Agregar el header al inicio
  const headerElement = header();
  individualView.appendChild(headerElement);

  const individualChat = document.createElement("main");
  individualChat.innerHTML = `

  <div class="container">
    <div class="column-left">
      <img src=${data.imageUrl} alt=${data.name}/><br>
      <p>Texto en la primera columna</p>
    </div>

     <div class="column-right">
      <div class="chat-header">
        <img src=""./../data/img/back.png" alt="back">
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
  const footerElement = footer();
  individualView.appendChild(footerElement);

  return individualView;
};*/
