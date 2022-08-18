var form = document.querySelector(".form-body");

// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var email = e.target.name.value;
  var name = e.target.email.value;
  // console.log(name, email);
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
});
