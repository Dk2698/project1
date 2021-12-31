myDisplay(a1){
    document.getElementById("demo").innerHTML = a1;
}
function myError(a1){
    document.getElementById("demo1").innerHTML = a1;
}

let myPromise = new Promise(function(mysucc, myfail){

    let req = new XMLHttpRequest()
    req.open('GET', "mycar.html");
    req.onload = function(){
        if(req.status == 200){

            mysucc(req.response)
        } else {
            myfail(req.status)
        }
    }

    req.send()
})


myPromise.then(
    function(value){myDisplay(value)},
    function(error){myError(error)}

)

mypromise
    .then(data => JSON.data)
    .then(resposn)
    .catch(error => console.log("hello"))




function a1 (){

}

const hello = function(a2, a2){

}

hello(a1)