let ROUTES = {};
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

const queryStringToObject = (queryString) => {
  const newURL = new URLSearchParams(queryString);
  const urlToParam = Object.fromEntries(newURL);
  return urlToParam;
}

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
  document.title = pathname;
  history.pushState({}, "", pathname);
  const splitPathname = pathname.split("?");
  props = splitPathname[1];
  pathname = splitPathname[0];
  const objectProps = queryStringToObject(props);
  renderView(pathname, objectProps);
};


export const onURLChange = (location) => {
  const searchObject = queryStringToObject(window.location.search);
  if (searchObject) {
    renderView(location, searchObject);
  }
  renderView(location);
};


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