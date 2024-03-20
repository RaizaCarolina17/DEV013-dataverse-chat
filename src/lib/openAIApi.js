// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (prompt) => {
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getApiKey()
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { "role": "user", "content": prompt }
      ]
    })
  });

  if (!resp.ok) {
    throw new Error('Error de comunicación con la API');
  }

  const responseSystem = await resp.json();
  return responseSystem;
};