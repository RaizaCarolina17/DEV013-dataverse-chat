let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRoot) => {
  rootElement = newRoot;
};

export const setRoutes = (newRoutes) => {
  // console.log(newRoutes);
  if (typeof newRoutes === "object") {
    ROUTES = newRoutes;
  }
};

export const queryStringToObject = (queryString) => {
  const urlProps = new URLSearchParams(queryString);
  const finalObject = Object.fromEntries(urlProps.entries());
  return finalObject;
};

const renderView = (pathname, props = {}) => {
  //console.log(ROUTES);
  const root = rootElement;
  root.innerHTML = "";
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};

export const navigateTo = (pathname, props = {}) => {
  document.title = pathname;
  history.pushState({}, "", pathname);
  const splitPathname = pathname.split("?");
  props = splitPathname[1];
  pathname = splitPathname[0];
  const objectProps = queryStringToObject(props);
  renderView(pathname, objectProps);
};

export const onURLChange = (pathname) => {
  const searchURL = window.location.search;
  const objectProps = queryStringToObject(searchURL);
  renderView(pathname, objectProps);
};