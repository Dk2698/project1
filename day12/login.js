var users = [
    {
      "id": "1",
      "uname": "kumar",
      "password":"12345678"
    },
    {
        "id": "2",
        "uname": "mohan",
        "password":"87654321"
    },
    {
        "id": "3",
        "uname": "ram",
        "password":"00000000"
    },
]

var btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{

    let uname = document.getElementById("uname").value 
    let password = document.getElementById("password").value 
    console.log(uname,password)
    let flag =0
    for(i =0; i< users.length;i++){
        if( uname === users[i].uname && password ===users[i].password ){
            flag =1
            break;
        } 
    }
    if(flag === 1){
        alert("login successfully")
    } 
    else{
        alert("invallid user")
    }

}

)

// function login(event){
//     event.preventDefault();
//     let uname = document.getElementById(uname).value 
//     let password = document.getElementById(password).value 
//     console.log(uname,password)
//     let flag =0
//     for(i =0; i< users.length;i++){
//         if( uname === users[i].uname && password ===users[i].password ){
//             flag =1
//             break;
//         } 
//     }
// }