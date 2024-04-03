//verificar que tenemos la data
//crear el elemento padre que seria el ul
//crear los elementos hijos li
//crear los elementos dl(padre) dt y dd (hijos)
//que toda la información se almacene en tarjetas tipo card
//retornar la lista ordenada segun la data

export const renderItems = (data) => {
<<<<<<< HEAD
  const list = document.createElement('ul');

  data.forEach(data => {
    const itemList =  document.createElement('li');
    itemList.classList.add('card');
    const itemContainer = document.createElement('dl');
    itemContainer.innerHTML = `
  
  
  <img src=${data.imageUrl} alt=${data.name}/><br>
  <dd itemprop="name">${data.name}</dd><br>
  <dd itemprop="description">${data.description}</dd>
  `;
  itemList.appendChild(itemContainer);
  list.appendChild(itemList);
  });
    return list;
=======
  // Aquí comienza tu código y puedes retornar lo que tu necesites GENERACION DINAMICA
  const list = document.createElement("ul");
  data.forEach(data => {

    const itemList = document.createElement("li");
    const itemContainer = document.createElement("dl");
    itemList.classList.add("card");

    itemContainer.innerHTML = `
          <img src=${data.imageUrl} alt=${data.name}/><br>
          <dd itemprop="name">${data.name}</dd><br>
          <dd itemprop="Descripción"> ${data.description}</dd><br>
          `;

    itemContainer.setAttribute("itemscope", "");
    itemContainer.setAttribute("itemtype", "escritoras");
    itemList.setAttribute("itemtype", "https://schema.org/Person");
    list.setAttribute("itemtype", "https://schema.org/Person");

    itemList.appendChild(itemContainer);
    list.appendChild(itemList)

  });

  return list;
>>>>>>> d0f909698b86e3ad368ac3036a50264871d36668
};
