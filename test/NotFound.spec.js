import { notFound } from "../src/components/NotFound.js";

describe('describe NotFound', () => {
  it("Debería mostrar el NotFound con imagen, texto y botón", () => {
    const notFoundElement = notFound();

    expect(notFoundElement).toBeDefined();
    expect(notFoundElement.querySelector("h1")).not.toBeNull();
    expect(notFoundElement.querySelector("img")).not.toBeNull();
    expect(notFoundElement.querySelector("button")).not.toBeNull();
  });
});

