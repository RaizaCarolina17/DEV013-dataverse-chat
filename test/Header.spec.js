import { header } from "../src/components/Header.js";

describe('describe el header', () => {
  it("It should show the header with the image and title", () => {
    // Actuar: Crear el header
    const headerElement = header();

    expect(headerElement).toBeDefined(); // Verifica que el header se ha creado
    expect(headerElement.querySelector("img")).not.toBeNull(); 
    expect(headerElement.querySelector("h1")).not.toBeNull(); 
    expect(headerElement.querySelector("h1").textContent).toBe("EL MUNDO A TRAVÉS DE GRANDES ESCRITORAS"); 
  });
});