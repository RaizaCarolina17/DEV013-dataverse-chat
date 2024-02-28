export const home = () => {
   const p = document.createElement('p');
   p.innerHTML= "Hola Mundo. Este es nuestro HOME";
   return p
};

/*export const home = () => {
    const dataWithoutIdAll = data.filter(character => character.id !== "all");
    const homeView = document.createElement("div");
    homeView.className = "viewComponent";
    
    let result = dataWithoutIdAll;
  
    
    function setupRenderCards(cards) {
      const renderCardsComponent = renderCards(cards);
      // RenderCardsComponent es un elemento ul
      renderCardsComponent.addEventListener("click", (event) => {
        const closestLi = event.target.closest("li");
        if (closestLi) {
          // Click dentro de la tarjeta
          const characterId = closestLi.getAttribute("id");
          navigateTo("/details", { id: characterId });
        }
      });
      return renderCardsComponent;
    }
}*/