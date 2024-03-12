import { createBtnChat } from "../components/ButtonChat.js";

export const renderItems = (data) => {

  const list = document.createElement("ul");

  // Crear el diálogo y agregarlo al DOM
  const modalApiKeyIndividual = document.createElement("dialog");
  modalApiKeyIndividual.id = "modalApiKeyIndividual";
  modalApiKeyIndividual.innerHTML = `
  <div class="modalApiKey" id="modalApiKey">
    <div id="sendKey"></div>
    <input type="text" id="ApiKey" name="ApiKey" placeholder ="Ingresa tu API KEY" />
    <button data-testid="button-send" id="button-send">Enviar</button>
    <button data-testid="button-back-home" id="button-back-home">Regresar</button>
  </div>
`;
  document.body.appendChild(modalApiKeyIndividual);

  data.forEach(data => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemList.classList.add("card");

    itemContainer.innerHTML = `
        <img src=${data.imageUrl} alt=${data.name}/><br>
        <dd itemprop="name">${data.name}</dd><br>
        <dd itemprop="DescripciónC"> ${data.shortDescription}</dd><br>
        <dt> Nacionalidad:</dt><dd itemprop="country">${data.facts.countryNacimiento}</dd>
        <dt>Género literario:</dt><dd itemprop="genero">${data.facts.mainField}</dd> <br>
     `;

    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "escritoras");
    itemList.setAttribute("itemtype", "https://schema.org/Person");
    list.setAttribute("itemtype", "https://schema.org/Person");

    // Agregar el botón a cada card
    const btnChat = createBtnChat();
    //btnChat.addEventListener("click", () => {
    //console.log("Botón CHAT clickeado");
    //});
    itemContainer.appendChild(btnChat);
    btnChat.addEventListener('click', () => {
      const modalApiKeyIndividual = document.getElementById('modalApiKeyIndividual');
      modalApiKeyIndividual.showModal();
    })

    itemList.appendChild(itemContainer);
    list.appendChild(itemList);



  });


  return list;
};