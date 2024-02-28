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
    if (newRoutesValue["/error"]) {
      ROUTES = newRoutesValue;
    }
  }
};

const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = "";

  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const { component, title } = ROUTES[pathname];
    const template = component(props);

    // Update the document title based on the route
    document.title = title || "Default Title";

    root.appendChild(template);
  } else {
    // in case not found render the error view
    root.appendChild(ROUTES["/error"].component(props));
  }
};


export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  let URLvisited = window.location.origin + pathname
  console.log({ props })
  if(Object.keys(props).length !== 0) {
    const search = new URLSearchParams()
    for (const [key, value] of Object.entries(props)) {
      search.set(key, value)
    }
    URLvisited = URLvisited + '?' + search.toString()
  }
  
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (URL) => {
  const pathname = URL.pathname
  const searchString = URL.search
  const queryParams = new URLSearchParams(searchString)
  const props = {}
  for (const [key, value] of queryParams) {
    props[key] = value
  }
  console.log({ URL, pathname, searchString, queryParams, props })
  renderView(pathname, props);
};