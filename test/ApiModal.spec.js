import { ApiModal } from '../src/Components/ApiModal.js';
import { setApiKey, removeApiKey } from '../src/lib/apiKey.js';
import { navigateTo } from '../src/router.js';

jest.mock('../src/lib/apiKey.js', () => ({
  setApiKey: jest.fn(),
  removeApiKey: jest.fn()
}));

jest.mock('../src/router.js', () => ({
  navigateTo: jest.fn()
}));

// eslint-disable-next-line no-undef
global.alert = jest.fn();

describe('ApiModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Send with invalid password', () => {
    const redirectUrl = '/ruta-de-redireccion';
    const modal = ApiModal(redirectUrl);
    document.body.appendChild(modal);
    const inputApiKey = modal.querySelector("#ApiKey");
    const buttonSend = modal.querySelector("#button-send");
    inputApiKey.value = 'claveinvalida';
    buttonSend.dispatchEvent(new Event("click"));
    // Comprueba que no se haya llamado a las funciones de setApiKey ni navigateTo
    expect(setApiKey).not.toHaveBeenCalled();
    expect(navigateTo).not.toHaveBeenCalled();
    // Limpia el modal del DOM
    document.body.removeChild(modal);
  });

  test('it should clear key', () => {
    const modal = ApiModal('/ruta-de-redireccion');
    document.body.appendChild(modal);
    const inputApiKey = modal.querySelector("#ApiKey");
    const buttonClear = modal.querySelector("#button-clear");
    inputApiKey.value = 'clave';
    buttonClear.dispatchEvent(new Event("click"));
    expect(removeApiKey).toHaveBeenCalled();
    expect(inputApiKey.value).toBe('');
    document.body.removeChild(modal);
  });
});