export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const ApiKeyValue = localStorage.getItem("apiKeyValue");
  console.log(localStorage.getItem("ApiKeyValue"))
  return ApiKeyValue;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem("apiKeyValue", key);
};

export const removeApiKey = () => {
  //limpia los datos guardados en el almacenamiento local
  localStorage.clear();
}