export const renderItems = (data) => {
  
  const list = document.createElement("ul");
  data.forEach(data => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemList.classList.add("card");

    itemContainer.innerHTML = `
        <img src=${data.imageUrl} alt=${data.name}/><br>
        <dd itemprop="name">${data.name}</dd><br>
        <dd itemprop="DescripciónC"> ${data.shortDescription}</dd><br>
        <button class="btn-chat">
          <img src="./../data/img/button-chat.png" alt="boton-chat">
        </button>
        `;
    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "escritoras");
    itemList.setAttribute("itemtype", "https://schema.org/Person");
    list.setAttribute("itemtype", "https://schema.org/Person");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList);

  });

  return list;
};