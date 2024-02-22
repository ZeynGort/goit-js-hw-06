const refs = {
  sizeControl: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.sizeControl.addEventListener("input", updateFontSize);

function updateFontSize() {
  refs.text.style.fontSize = `${refs.sizeControl.value}px`;
}
