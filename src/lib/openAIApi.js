// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const apiKey = getApiKey();


export const communicateWithOpenAI = async (writerMessages, userMessages) => {
  //Aquí es donde debes implementar la petición con fetch o axios
  try {
    const response = await axios({
      method: "POST",
      url: "https://api.openai.com/v1/chat/completions",
      headers:
      {
        Authorization: "Bearer " + apiKey,
      },
      data: {
        messages: [{
          role: "system",
          content: `Grandes escritoras, ${writerMessages} Manten tus respuestas concretas`,
        },
        {
          role: "user",
          content: userMessages
        }],
        model: "gpt-3.5-turbo",
      }
    })
    return response;
  }
  catch (error) {
    return "error"
  }
};