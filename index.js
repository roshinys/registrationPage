showUser();
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
  var user_serialized = JSON.stringify(user);
  localStorage.setItem(user.email, user_serialized);
  var parentNode = document.getElementById("items");
  parentNode.innerHTML = "";
  showUser();
});
function showUser() {
  Object.keys(localStorage).forEach((key) => {
    user = JSON.parse(localStorage.getItem(key));
    // console.log(user);
    showUserInFrontEnd(user);
  });
}
function showUserInFrontEnd(user) {
  var parentNode = document.getElementById("items");
  if (Object.keys(localStorage).length != 1) {
    parentNode.style.display = "block";
  }
  var child = document.createElement("li");
  child.innerText = `name = ${user.name}  email = ${user.email}`;
  parentNode.appendChild(child);
  console.log(parentNode);
}
