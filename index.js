//using axios and crud
var form = document.querySelector(".form-body");

//get all users
window.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("http://localhost:3000/user/add-user/");
  // console.log(res);
  const users = res.data;
  console.log(users);
  users.forEach((user) => {
    showUserInFrontEnd(user);
  });
});

//create users

var submitForm = async (event) => {
  event.preventDefault();
  var userName = event.target.name.value;
  var userEmail = event.target.email.value;
  var user = {
    name: userName,
    email: userEmail,
  };
  const res = await axios.post("http://localhost:3000/user/add-user/", user);
  if (!res.data.message) {
    showUserInFrontEnd(res.data);
  } else {
    const errorTag = document.getElementById("errorMessage");
    errorTag.innerText = res.data.message;
  }
};

function showUserInFrontEnd(user) {
  // console.log(user);
  const parentNode = document.getElementById("listofusers");
  const childHtml = `<li  id=${user.id} >${user.name} - ${user.email}
  <button onclick=deleteUser("${user.id}")>DeleteUser</button>
  <button onclick=editUser("${user.email}","${user.name}","${user.id}")>EditUser</button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

//edit User
function editUser(email, name, userId) {
  document.getElementById("email").value = email;
  document.getElementById("name").value = name;
  deleteUser(userId);
}

//delete users;
function deleteUser(userId) {
  console.log(userId);
  axios
    .delete(`http://localhost:3000/user/delete-user/${userId}`)
    .then((res) => {
      console.log("successfully deleted user with id " + userId);
      removeUserFromScreen(userId);
    })
    .catch((err) => {
      console.log(err);
    });
}

function removeUserFromScreen(userId) {
  const parentNode = document.getElementById("listofusers");
  const childNode = document.getElementById(userId);
  if (childNode) {
    parentNode.removeChild(childNode);
  }
}

//using localStorage

// showUser();
// var form = document.querySelector(".form-body");
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
