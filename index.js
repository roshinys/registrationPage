// showUser();
var form = document.querySelector(".form-body");
//using axios and crud
submitForm = (event) => {
  event.preventDefault();
  var userName = event.target.name.value;
  var userEmail = event.target.email.value;
  var user = {
    name: userName,
    email: userEmail,
  };
  var user_serialized = JSON.stringify(user);
  axios.post(
    "https://crudcrud.com/api/ed73d95fff724af19de41a39f5d5e8ea/userDetails",
    user
  );
  showUserInFrontEnd(user);
};
function showUserInFrontEnd(user) {
  console.log(user);
  var parentNode = document.getElementById("items");
  var child = document.createElement("li");
  child.innerText = `${user.email} ${user.name}`;
  var btn = document.createElement("button");
  btn.className = "mg-5";
  btn.className = "delete";
  btn.innerText = "delete";
  btn.value = `${user.email}`;
  var editbtn = document.createElement("button");
  editbtn.className = "mg-5";
  editbtn.className = "edit";
  editbtn.innerText = "edit";
  editbtn.value = `${user.email}`;
  child.append(editbtn);
  child.appendChild(btn);
  parentNode.appendChild(child);
}

//using localStorage

// console.log(form);
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   var userName = e.target.name.value;
//   var userEmail = e.target.email.value;
//   if (localStorage.getItem(userEmail) !== null) {
//     localStorage.removeItem(userEmail);
//   }
//   var user = {
//     name: userName,
//     email: userEmail,
//   };
//   var user_serialized = JSON.stringify(user);
//   localStorage.setItem(user.email, user_serialized);
//   var parentNode = document.getElementById("items");
//   parentNode.innerHTML = "";
//   showUser();
// });

// function showUser() {
//   Object.keys(localStorage).forEach((key) => {
//     user = JSON.parse(localStorage.getItem(key));
//     // console.log(user);
//     showUserInFrontEnd(user);
//   });
// }
// function showUserInFrontEnd(user) {
//   var parentNode = document.getElementById("items");
//   if (Object.keys(localStorage).length != 0) {
//     parentNode.style.display = "block";
//   }
//   var child = document.createElement("li");
//   child.innerText = `${user.email} ${user.name}`;
//   var btn = document.createElement("button");
//   btn.className = "mg-5";
//   btn.className = "delete";
//   btn.innerText = "delete";
//   btn.value = `${user.email}`;
//   var editbtn = document.createElement("button");
//   editbtn.className = "mg-5";
//   editbtn.className = "edit";
//   editbtn.innerText = "edit";
//   editbtn.value = `${user.email}`;
//   child.append(editbtn);
//   child.appendChild(btn);

//   parentNode.appendChild(child);
// }
// var parentNode = document.getElementById("items");
// parentNode.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     localStorage.removeItem(e.target.value);
//   }
//   if (e.target.classList.contains("edit")) {
//     var email = document.getElementById("email").value;
//     var name = document.getElementById("name").value;
//     if (email === e.target.value) {
//       localStorage.removeItem(e.target.value);
//       var user = {
//         name: name,
//         email: email,
//       };
//       var user_serialized = JSON.stringify(user);
//       localStorage.setItem(user.email, user_serialized);
//     } else {
//       alert("not a correct edit and input email");
//     }
//     console.log(name, email);
//   }
//   parentNode.innerHTML = "";
//   showUser();
// });
