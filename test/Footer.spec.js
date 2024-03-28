import { footer } from "../src/components/Footer.js";

describe('describe el footer', () => {
  it("Debería mostrar el footer con un título h4", () => {
    const footerElement = footer();

    expect(footerElement).toBeDefined();
    expect(footerElement.querySelector("h4")).not.toBeNull(); 
    expect(footerElement.querySelector("h4").textContent).toBe(" Desarrolladoras: Raiza Gatica y Elizabeth/ Laboratoria ");
  })
})