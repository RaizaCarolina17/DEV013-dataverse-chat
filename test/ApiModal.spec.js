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

describe('ApiModal', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Enviar con clave válida', () => {
    const redirectUrl = '/ruta-de-redireccion';
    const modal = ApiModal(redirectUrl);
    document.body.appendChild(modal);

    const inputApiKey = modal.querySelector("#ApiKey");
    const buttonSend = modal.querySelector("#button-send");

    inputApiKey.value = 'clavevalida123';
    buttonSend.click();

    // Comprueba que se haya llamado a las funciones adecuadas
    expect(setApiKey).toHaveBeenCalledWith('clavevalida123');
    expect(navigateTo).toHaveBeenCalledWith(redirectUrl);
    expect(modal.style.display).toBe('none');

    // Limpia el modal del DOM
    document.body.removeChild(modal);
  });

  test('Enviar con clave inválida', () => {
    const redirectUrl = '/ruta-de-redireccion';
    const modal = ApiModal(redirectUrl);
    document.body.appendChild(modal);

    const inputApiKey = modal.querySelector("#ApiKey");
    const buttonSend = modal.querySelector("#button-send");

    inputApiKey.value = 'claveinvalida'; // Clave inválida
    buttonSend.click();

    // Comprueba que no se haya llamado a las funciones de setApiKey ni navigateTo
    expect(setApiKey).not.toHaveBeenCalled();
    expect(navigateTo).not.toHaveBeenCalled();

    // Limpia el modal del DOM
    document.body.removeChild(modal);
  });

  test('Limpiar clave', () => {
    const modal = ApiModal('/ruta-de-redireccion');
    document.body.appendChild(modal);

    const inputApiKey = modal.querySelector("#ApiKey");
    const buttonClear = modal.querySelector("#button-clear");

    // Simula una clave en el input
    inputApiKey.value = 'clave';
    buttonClear.click();

    // Comprueba que se haya llamado a la función removeApiKey
    expect(removeApiKey).toHaveBeenCalled();
    // Comprueba que el input haya sido limpiado
    expect(inputApiKey.value).toBe('');

    // Limpia el modal del DOM
    document.body.removeChild(modal);
  });

  test('Cerrar modal', () => {
    const modal = ApiModal('/ruta-de-redireccion');
    document.body.appendChild(modal);

    // Desencadena el evento de clic en el botón "Cerrar"
    const buttonBackHome = modal.querySelector("#button-back-home");
    buttonBackHome.click();

    // Comprobar que el estilo de modalApiKey es 'none'
    expect(modal.style.display).toBe('none');
    // Limpia el modal del DOM
    document.body.removeChild(modal);
  });
});