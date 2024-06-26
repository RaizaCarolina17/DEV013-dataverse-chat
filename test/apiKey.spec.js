import { getApiKey, setApiKey} from "../src/lib/apiKey";

describe("getApiKey", () => {
  it("it should return the value of the API Key", () => {
    window.localStorage.setItem("apiKeyValue", "ingresando123");
    expect(getApiKey()).toBe("ingresando123");
  });
});

describe("setApiKey", () => {
  it("it should set apiKey correctly", () => {
    setApiKey("ingresando123")
    const keySpec = window.localStorage.getItem("apiKeyValue");
    expect(keySpec).toBe("ingresando123");
  });
});