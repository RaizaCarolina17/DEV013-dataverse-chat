import { footer } from "../src/components/Footer.js";

describe('describe el footer', () => {
  it("It should show the footer with an h4 title", () => {
    const footerElement = footer();

    expect(footerElement).toBeDefined();
    expect(footerElement.querySelector("h4")).not.toBeNull(); 
    expect(footerElement.querySelector("h4").textContent).toBe(" Desarrolladoras: Raiza Gatica y Elizabeth Patiño/ Laboratoria ");
  })
})