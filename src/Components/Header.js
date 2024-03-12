export const header = () => {
  const header = document.createElement("header");
  header.id = "header"
  header.innerHTML = `
    <img src="./data/img/banner_escritoras.png">
    <h1>EL MUNDO A TRAVÉS DE GRANDES ESCRITORAS</h1>
    `;
  return header;
};
