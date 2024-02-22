function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  button: document.querySelector(".change-color"),
  spanBack: document.querySelector(".color"),
  body: document.body,
};

refs.button.addEventListener("click", changeColor);

function changeColor() {
  refs.body.style.background = getRandomHexColor();
  refs.spanBack.textContent = getRandomHexColor();
}
