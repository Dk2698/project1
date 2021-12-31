let home = ""
let login =""

let get = () =>{
    let h1 = document.getElementById("home");
    home = h1.cloneNode(true);
    let h2 = document.getElementById("login");
    login = h2.cloneNode(true);
    // h1.remove(true);
    // h2.remove(true);
    h1.innerHTML=""
    h2.innerHTML=""

}


let displayHome = ()=>{
    let h1 = document.getElementById("home")
    h1.appendChild(home)
    // h1.innerHTML = home
    let h2 = document.getElementById("login");
    h2.innerHTML=""
}

let displayLogin = ()=>{
    let h1 = document.getElementById("login")
    h1.appendChild(login)


    let h2 = document.getElementById("home");
    h2.innerHTML=""
}