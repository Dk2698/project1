var users = [];

// display error message

function displayError(elemId, Msg) {
  document.getElementById(elemId).innerHTML = Msg;
}

var name = document.getElementById("fname").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var gender = document.getElementById("gender");

let billingAddress = document.getElementById("billingAddress");
let isChecked = document.getElementById("isChecked");
let shippingAddress = document.getElementById("shippingAddress");

function validate_form() {
  //
  var nameError = (emailError = passwordError = genderError = true);

  if (name == "") {
    displayError("nameError", "Please Enter your name");
  } else {
    displayError("nameError", "");
    nameError = false;
  }

  if (email == "") {
    displayError("emailError", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      displayError("emailError", "Please enter a valid email address");
    } else {
      displayError("emailError", "");
      emailErorr = false;
    }
  }

  if (gender == "") {
    displayError("genderErr", "Please select your gender");
  } else {
    displayError("genderErr", "");
    genderError = false;
  }

  if ((nameError || emailError || passwordError || genderError) == true) {
    return false;
  }
}

document.getElementById("submit1").addEventListener("submit", function (e) {
  if (!validate_form) {
    e.preventDefault();
  } else {
    obj = {
      name: name,
      email: email,
      gennder: gender,
    };
    users.push(obj);
  }
});

// convert to object to json
var mydata = JSON.stringify(users);
