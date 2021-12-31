function myDisplay(some){
    document.getElementById("demo").innerHTML = some
    let tx1 = document.getElementById("n1").innerHTML
    document.getElementById("demo").innerHTML = tx1

}

function getFile(myCallback){
let req = new XMLHttpRequest();
req.open("GET", "display.html");
req.onload = function(){
    if(req.status  == 200){
        myCallback(this.responseText);
    } else {
        myCallback("Error: " + req.status)
    }
}
req.send()
}
getFile(myDisplay)