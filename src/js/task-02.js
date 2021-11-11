const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrs = document.querySelector("#ingredients");

const ingrList = ingredients.map((ingredient) => {
  const ingr = document.createElement("li");
  ingr.textContent = ingredient;
  return ingr;
});

ingrs.append(...ingrList);
