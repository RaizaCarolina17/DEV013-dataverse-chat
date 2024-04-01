import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

jest.mock("../src/lib/apiKey.js", () => ({
  getApiKey: jest.fn()
}));
const response = {
  index: 0,
  message: {
    role: "system",
    content: "este es un mensaje del sistema",
  },
  "logprobs": null,
  "finish_reason": "stop"
};

// función mock para comunicarnos con la API de OpenAI
// const mockFetch = jest.fn();
// eslint-disable-next-line no-undef
global.fetch = jest.fn(()=> Promise.resolve({
  json: () => Promise.resolve(response)
}))

// función de comunicación con la API como un parámetro
describe("communicateWithOpenAI", () => {
  test.only("Should return a response from the API in string", 
    async () => {
     
      //simula el prompt y una escritora
      const prompt = " prompt";
      const writer = {description: "descripción de la escritora"};

      //espera respuesta
      const result = await communicateWithOpenAI(prompt,writer);

      expect(typeof result).toBe('object');
      expect(result.message.content).toBe("este es un mensaje del sistema");
    })
})







