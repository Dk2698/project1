import Register from "./register.js";

let n1 = document.getElementById("a3");
n1.addEventListener("submit", function (e) {
  e.preventDefault();

  let fname = document.getElementById("fname").value;
  let uname = document.getElementById("uname").value;

  let log = new Register(fname, uname);
  console.log(fname, uname);
  if (log.valid()) {
    document.getElementById("n1").innerHTML = " successfully ";
  } else {
    document.getElementById("n1").innerHTML = "invalid user";
  }
});
