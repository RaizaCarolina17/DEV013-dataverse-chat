import { individual } from "../src/Components/Individual.js";
//import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

const mockData = [
  {
    id: "001",
    imageUrl: "imagen.jpg",
    name: "Nombre",
    description: "Description",
  }
];

/* jest.mock("../src/lib/openAIApi.js", () => ({
  communicateWithOpenAI:
    jest.fn().mockResolvedValue({ choices: [{ message: { content: "Respuesta de prueba" } }] }),
})); */

describe("individual", () => {
  it("should create individual view", () => {
    // Llamar a la función individual
    const individualView = individual(mockData[0]);
    // Verificar que la vista individual se haya definido correctamente
    expect(individualView).toBeDefined();
  });

  /* it("should send message when button is clicked", () => {
    const individualView = individual(mockData[0]);
    document.body.appendChild(individualView);
    const SendButtomChat = document.querySelector("#SendButtomChatI");
    SendButtomChat.dispatchEvent(new Event("click"));
    expect(communicateWithOpenAI).toHaveBeenCalled();
  }); */

  it("should send message when button is clicked", () => {
    const individualView = individual(mockData[0]);
    const SendButtomChat = individualView.querySelector("#SendButtomChatI");
    const messageUserMock = jest.fn();
    individualView.messageUser = messageUserMock;

    SendButtomChat.dispatchEvent(new Event("click"));
    // Verificamos si se ha llamado a la función messageUser
    expect(messageUserMock).toHaveBeenCalled();
  });

});


/* it("should send message when button is clicked", () => {
    const individualView = individual(mockData[0]);
    const SendButtomChat = individualView.querySelector("#SendButtomChatI");
    const messageUserMock = jest.fn();
    individualView.messageUser = messageUserMock;
  
    SendButtomChat.dispatchEvent(new Event("click"));
    // Verificamos si se ha llamado a la función messageUser
    expect(messageUserMock).toHaveBeenCalled();
  }); */


/*  it("should send message when 'Enter' key is pressed", async () => {
   // Llamar a la función individual y obtener la vista individual
   const individualView = await new Promise((resolve) => {
     resolve(individual(mockData[0]));
   });
 
   // Obtener el elemento userInput
   const userInput = individualView.querySelector("#userInputI");
 
   // Simular el evento keydown con la tecla 'Enter'
   userInput.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
 
   // Verificar si la función messageUser se llamó correctamente
   expect(window.messageUser).toHaveBeenCalled();
 }); */