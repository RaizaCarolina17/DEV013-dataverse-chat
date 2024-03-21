// Importa la función para obtener la API KEY desde apiKey.js
//import { getApiKey } from './apiKey.js';
//import data from "../data/dataset";

export const communicateWithOpenAI = async (prompt) => {
 

  const systemMessages = "";

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getApiKey1
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: "system", content: `Eres una escritora famosa, ${systemMessages}` },
        { role: "user", content: prompt }
      ]
    })
  });

  const responseSystem = await resp.json();
  console.log(responseSystem);
  return responseSystem;
};
