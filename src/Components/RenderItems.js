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
        <dt> Nacionalidad:</dt><dd itemprop="country">${data.facts.countryNacimiento}</dd>
        <dt>Año de nacimiento:</dt><dd itemprop="fechaNacimiento">${data.facts.yearOfBirth}</dd>
        <dt>Género literario:</dt><dd itemprop="genero">${data.facts.mainField}</dd>
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