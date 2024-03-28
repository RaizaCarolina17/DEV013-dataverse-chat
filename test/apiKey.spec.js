import { getApiKey, setApiKey} from "../src/lib/apiKey";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    window.localStorage.setItem("apiKeyValue", "ingresando123");
    expect(getApiKey()).toBe("ingresando123");
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    setApiKey("ingresando123")
    const keySpec = window.localStorage.getItem("apiKeyValue");
    expect(keySpec).toBe("ingresando123");
  });
});