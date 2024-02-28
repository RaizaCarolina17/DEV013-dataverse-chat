//verificar que tenemos la data
//crear el elemento padre que seria el ul
//crear los elementos hijos li
//crear los elementos dl(padre) dt y dd (hijos)
//que toda la información se almacene en tarjetas tipo card
//retornar la lista ordenada segun la data

export const renderItems = (data) => {
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
};
