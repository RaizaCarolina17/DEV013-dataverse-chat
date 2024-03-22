import {getApiKey} from "./apiKey.js"

export const communicateWithOpenAI = async (prompt, writer) => {
  //console.log(writer)
  const getApiKey1 = getApiKey();
 
  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getApiKey1
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system",
          content: `Comportate como esta escritora,
           ${writer.description}, genera respuestas cortas`
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const responseSystem = await resp.json();
  //console.log(responseSystem);
  return responseSystem;
};
