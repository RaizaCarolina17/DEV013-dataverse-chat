export const header = () => {
    const header = document.createElement("header");
    header.id = "header"
    header.innerHTML = `
    <img src="./data/img/banner_escritoras.png">
      <h1>El mundo a través de grandes escritoras</h1>
        `;

    return header;
  };
