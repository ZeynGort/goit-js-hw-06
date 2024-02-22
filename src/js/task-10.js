function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  inputNumber: document.querySelector("input"),
  containerBoxes: document.getElementById("boxes"),
};
refs.minValue = refs.inputNumber.getAttribute("min");
refs.maxValue = refs.inputNumber.getAttribute("max");

refs.buttonCreate.addEventListener("click", creator);
refs.buttonDestroy.addEventListener("click", destroyer);

function creator() {
  createBoxes(refs.inputNumber.value);
}

function createBoxes(amount) {
  try {
    if (amount < Number(refs.minValue) || amount > Number(refs.maxValue)) {
      throw new Error(
        `Ваше число має бути вмежах від: ${refs.minValue} до: ${refs.maxValue} включно!`
      );
    }
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      refs.containerBoxes.append(box);
      size += 10;
    }
  } catch (error) {
    alert(error);
  }
}

function destroyer() {
  refs.containerBoxes.innerHTML = "";
}
