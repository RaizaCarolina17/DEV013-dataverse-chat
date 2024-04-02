import { notFound } from "../src/components/NotFound.js";

describe('describe NotFound', () => {
  it("It should show the NotFound with image, text and button", () => {
    const notFoundElement = notFound();

    expect(notFoundElement).toBeDefined();
    expect(notFoundElement.querySelector("h1")).not.toBeNull();
    expect(notFoundElement.querySelector("img")).not.toBeNull();
    expect(notFoundElement.querySelector("button")).not.toBeNull();
  });
});

