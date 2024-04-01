import { communicateWithOpenAI } from "../src/lib/openAIApi.js";
//import { getApiKey } from "../src/lib/apiKey.js";

jest.mock("../src/lib/apiKey.js", () => ({
  getApiKey: jest.fn()
}));

// función mock para comunicarnos con la API de OpenAI
const mockFetch = jest.fn();

// función de comunicación con la API como un parámetro
describe("communicateWithOpenAI", () => {
  test("Should return a response from the API in string", 
    async () => {
      const response = {
        index: 0,
        message: {
          role: "system",
          content: "este es un mensaje del sistema",
        },
        "logprobs": null,
        "finish_reason": "stop"
      };

      // Simulamos la respuesta de fetch
      mockFetch.mockResolvedValue({
        json: jest.fn().mockResolvedValue(response)
      });

      //simula el prompt y una escritora
      const prompt = " prompt";
      const writer = {description: "descripción de la escritora"};

      //espera respuesta
      const result = await communicateWithOpenAI(prompt,writer, mockFetch);

      expect(typeof result).toBe('object');
      expect(result.message.content).toBe("este es un mensaje del sistema");
    })
})







