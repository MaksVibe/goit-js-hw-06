const input = document.querySelector("#validation-input");
const maxLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  input.classList.add("invalid");
  if (maxLength === input.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
