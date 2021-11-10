const refs = {
  form: document.querySelector(".login-form"),
  email: document.querySelector("[name=email]"),
  password: document.querySelector("[name=password]"),
  submitBtn: document.querySelector("[type=submit]"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    email: refs.email.value,
    password: refs.password.value,
  };
  if (!refs.email.value || !refs.password.value) {
    refs.submitBtn.disabled;
    alert("All fields must be filled in!");
  }
  refs.form.reset();
  console.log(user);
});
