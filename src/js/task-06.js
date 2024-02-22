const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", eventCheck);

function eventCheck() {
  if (
    Number(refs.input.getAttribute("data-length")) === refs.input.value.length
  ) {
    refs.input.classList.remove("invalid", "valid") ||
      refs.input.classList.add("valid");
  } else {
    refs.input.classList.remove("valid", "invalid") ||
      refs.input.classList.add("invalid");
  }
}
