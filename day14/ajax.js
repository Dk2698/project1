document.getElementById("btn").addEventListener("click", f4);
var data;

function f4(){
    var request = new XMLHttpRequest();

    request.open('GET','https://hp-api.herokuapp.com/api/characters')

    request.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementBYID("data").innerHtml= this.resposnseText
            data = JSON.parse(this.responseText)
            f5();

        }
        if(this.readyState == 4 && this.status == 404){ // 404 page not found
            document.getElementById("data").innerHTML="given url not page"
        }
    }
    request.send();
}

// display data 
function f5(){
    var s1="<table border='1'";
    s1+="<th"
}