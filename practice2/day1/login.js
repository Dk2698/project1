class Login {
  user = {
    uname: "ms@gmail.com",
    psw: "ms123",
  };

  constructor(uname, password) {
    this.uname = uname;
    this.password = password;
  }

  valid() {
    if (this.username === this.uname.uname && this.password == this.user.psw) {
      return true;
    } else {
      return false;
    }
  }
  // display() {
  //   console.log(this.uname, this.password);
  // }
}

// let email1 = document.getElementById("email").value;
// let password1 = document.getElementById("password").value;
// console.log("hello" + email1);
// console.log("password" + password1);

// let obj = new Login(email1, password1);
// obj.display();

export default Login;
