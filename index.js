//using axios and crud
var form = document.querySelector(".form-body");

//get all users
window.addEventListener("DOMContentLoaded", async () => {
  await axios
    .get(
      "https://crudcrud.com/api/e057dba6b15f411e81bfef5997c43291/userDetails"
    )
    .then((res) => {
      const users = res.data;
      console.log(users);
      users.forEach((user) => {
        showUserInFrontEnd(user);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//create users

var submitForm = (event) => {
  event.preventDefault();
  var userName = event.target.name.value;
  var userEmail = event.target.email.value;
  var user = {
    name: userName,
    email: userEmail,
  };
  axios
    .post(
      "https://crudcrud.com/api/e057dba6b15f411e81bfef5997c43291/userDetails",
      user
    )
    .then((res) => {
      // console.log(res);
      showUserInFrontEnd(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

function showUserInFrontEnd(user) {
  // console.log(user);
  const parentNode = document.getElementById("listofusers");
  const childHtml = `<li  id=${user._id} >${user.name} - ${user.email} <button onclick=deleteUser("${user._id}")>DeleteUser</button></li>`;
  parentNode.innerHTML = parentNode.innerHTML + childHtml;
}

//delete users;
function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/e057dba6b15f411e81bfef5997c43291/userDetails/${userId}`
    )
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
