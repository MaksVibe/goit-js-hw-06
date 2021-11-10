function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const body = document.querySelector("body");

changeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
});
