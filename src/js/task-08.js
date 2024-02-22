const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    refs.form.elements.email.value.length === 0 ||
    refs.form.elements.password.value.length === 0
  ) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const objectForm = {
      email: refs.form.elements.email.value,
      password: refs.form.elements.password.value,
    };
    console.log(objectForm);
    refs.form.reset();
  }
}
