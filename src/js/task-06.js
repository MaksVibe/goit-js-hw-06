const input = document.querySelector("#validation-input");
const maxLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (maxLength >= input.value.length > 0) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (input.value.length > maxLength) {
    input.classList.add("invalid");
  }
  if (input.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  }
});
