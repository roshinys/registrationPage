var form = document.querySelector(".form-body");

// console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var userName = e.target.name.value;
  var userEmail = e.target.email.value;
  var user = {
    name: userName,
    email: userEmail,
  };
  user_serialized = JSON.stringify(user);
  localStorage.setItem("user", user_serialized);
  user_deserialized = JSON.parse(user_serialized);
  console.log(user_deserialized);
});
