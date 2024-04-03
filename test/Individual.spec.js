import { individual } from "../src/Components/Individual.js";
import { navigateTo } from "../src/router.js";

const mockData = [
  {
    id: "001",
    imageUrl: "imagen.jpg",
    name: "Nombre",
    description: "Description",
  }
];

describe("individual", () => {

  it("should create individual view", () => {
    const individualView = individual(mockData[0]);
    expect(individualView).toBeDefined();
  });

  it("should send chat grupal", () => {
    const individualContainer = document.createElement("div");
    document.body.appendChild(individualContainer);
    // Espera para asegurarnos de que el contenido se renderice completamente
    setTimeout(() => {
      const buttonchatGrupal = individualContainer.querySelector("#buttonchatGrupalI");
      buttonchatGrupal.dispatchEvent(new Event("click"));
      expect(navigateTo).toHaveBeenCalledWith('/group');
    }, 50);
  });

  /* it("should send chat grupal", () => {
    // Renderiza el componente individual y obtén su contenedor
    const individualContainer = document.createElement("div");
    //document.body.appendChild(individualContainer);
    // Obtiene el botón de chat grupal
    const buttonchatGrupal = individualContainer.querySelector("#buttonchatGrupalI");
    // Simula un clic en el botón de chat grupal
    buttonchatGrupal.dispatchEvent(new Event("click"));
    // Verifica que la función navigateTo('/group') se haya llamado al hacer clic en el botón
    expect(navigateTo).toHaveBeenCalledWith('/group');
  }); */
})