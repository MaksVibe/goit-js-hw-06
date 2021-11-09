let counterValue = 0;
const value = document.querySelector("#value");

const plusOne = document.querySelector('button[data-action="increment"]');
plusOne.addEventListener("click", () => {
  value.textContent = counterValue += 1;
});

const minusOne = document.querySelector('button[data-action="decrement"]');
minusOne.addEventListener("click", () => {
  value.textContent = counterValue -= 1;
});
