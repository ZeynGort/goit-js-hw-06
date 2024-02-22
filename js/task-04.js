const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};
let counterValue = 0;

refs.decrement.addEventListener("click", dec);
refs.increment.addEventListener("click", inc);

function dec() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
function inc() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
