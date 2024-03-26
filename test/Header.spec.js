import { header } from "../src/components/Header.js";

describe('describe el header', () => {
  it("Debería mostrar el header con la imagen y el título", () => {
    // Actuar: Crear el header
    const headerElement = header();

    expect(headerElement).toBeDefined(); // Verifica que el header se ha creado
    expect(headerElement.querySelector("img")).not.toBeNull(); // Verifica que hay una imagen dentro del header
    expect(headerElement.querySelector("h1")).not.toBeNull(); // Verifica que hay un título dentro del header
    expect(headerElement.querySelector("h1").textContent).toBe("EL MUNDO A TRAVÉS DE GRANDES ESCRITORAS"); // Verifica el texto del título
  });
});

