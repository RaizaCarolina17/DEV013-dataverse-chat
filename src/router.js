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
  console.log(ROUTES);
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



/*let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRoot) => {
  rootElement = newRoot;
  //window.addEventListener('popstate', () => {
  //onURLChange(new URL(window.location.href));});
};

export const setRoutes = (newRoutes) => {
  if (typeof newRoutes === "object") {
    if (newRoutes["/error"]) {
      ROUTES = newRoutes;
    }
  }
};

const queryStringToObject = (queryString) => {
  const newUrl = new URLSearchParams(queryString);
  const urlToParam = Object.fromEntries(newUrl.entries());
  return urlToParam;
};

const renderView = (pathname, props = {}) => {
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
  //actualiza el título del documento con la ruta
  document.title = pathname;
  //actualiza la url en la barra de direcciones
  history.pushState({}, "", pathname);
  //divide la ruta entre las vistas y los parametros
  const splitPathname = pathname.split("?");
  //Saca los parametros de la consulta y los asigna a los props
  props = splitPathname[1];
  //Actualiza la variable pathname para que contenga solo la ruta base
  pathname = splitPathname[0];
  //convertir los parámetros de la consulta en un objeto
  const objectProps = queryStringToObject(props);
  //renderiza la vista
  renderView(pathname, objectProps);
};

export const onURLChange = (location) => {
  const searchObject = queryStringToObject(window.location.search);
  if (searchObject) {
    renderView(location, searchObject);
  } else {
    renderView(location);
  }
};*/


/*let ROUTES = {};
let rootElement = "";

export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
  window.addEventListener('popstate', () => {
    onURLChange(new URL(window.location.href));
  });
};

export const setRoutes = (newRoutesValue) => {
  if (typeof newRoutesValue === "object") {
    ROUTES = newRoutesValue;
  }
};

const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const { component, title } = ROUTES[pathname];
    const template = component(props);

    document.title = title || "Default Title";

    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"].component(props));
  }
};

export const navigateTo = (pathname, props = {}) => {
  let URLvisited = window.location.origin + pathname;

  if (Object.keys(props).length !== 0) {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(props)) {
      search.set(key, value);
    }
    URLvisited = URLvisited + '?' + search.toString();
  }

  history.pushState({}, "", URLvisited);
  renderView(pathname, props);
};

export const onURLChange = (URL) => {
  const pathname = URL.pathname;
  const searchString = URL.search;
  const queryParams = new URLSearchParams(searchString);
  const props = {};

  for (const [key, value] of queryParams) {
    props[key] = value;
  }

  renderView(pathname, props);
};*/