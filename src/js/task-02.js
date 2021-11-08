const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let ingradient of ingredients) {
  const ingr = document.createElement("li");
  ingr.textContent = ingradient;
  ingr.classList.add("item");
  document.querySelector("#ingredients").append(ingr);
}
