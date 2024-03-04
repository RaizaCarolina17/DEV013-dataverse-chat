export const notFound = () => {
  const notFoundElement = document.createElement("div");
  notFoundElement.id = "notFound";
  notFoundElement.innerHTML = `
      <h1> NOT FOUND </h1>
  `;

  return notFoundElement;
};
 