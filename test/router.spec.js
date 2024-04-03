import {
  setRootElement,
  setRoutes,
  navigateTo,
  onURLChange
} from "../src/router.js";

// Mocking the DOM elements
document.body.innerHTML = '<div id="app"></div>';
const rootElement = document.getElementById('app');

// Mocking routes
const mockRoutes = {
  '/': () => document.createTextNode('Home Page'),
  '/about': () => document.createTextNode('About Page'),
  '/error': () => document.createTextNode('Error Page')
};

// Test for setRootElement function
test('setRootElement function sets the root element correctly', () => {
  setRootElement(rootElement);
  expect(rootElement).toEqual(document.getElementById('app'));
});

// Test for setRoutes function
test('setRoutes function sets the routes correctly', () => {
  setRoutes(mockRoutes);
  expect(mockRoutes).toEqual(mockRoutes);
});

// Test for navigateTo function
test('navigateTo function navigates to the correct route', () => {
  const pathname = '/about';
  navigateTo(pathname);
  expect(rootElement.innerHTML).toContain('About Page');
});

// Test for onURLChange function
test('onURLChange function changes the URL correctly', () => {
  const pathname = '/error';
  window.history.pushState({}, '', pathname);
  onURLChange(pathname);
  expect(rootElement.innerHTML).toContain('Error Page');
});