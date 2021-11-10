const fontInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontInput.addEventListener("input", (у) => {
  text.style.fontSize = `${fontInput.value}px`;
});
