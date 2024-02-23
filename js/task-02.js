const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");
const items = [];
ingredients.forEach((elem) => {
  const lastItem = document.createElement("li");
  lastItem.textContent = elem;
  lastItem.classList.add("item");
  items.push(lastItem);
});
listIngredients.append(...items);
