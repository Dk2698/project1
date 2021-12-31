import  Login  from "./login.js"

let n1 = document.getElementById("a3");
n1.addEventListener("click", function (e) {
  e.preventDefault();

  let u1 = document.getElementById("a1").value;
  let p1 = document.getElementById("a2").value;

  let log = new Login(u1, p1);

  if (log.valid()) {
    document.getElementById("n1").innerHTML = " successfully ";
  } else {
    document.getElementById("n1").innerHTML = "invalid user";
  }
});
