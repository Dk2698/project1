document.getElementById("add").onclick=function(){
    fun()
}

function fun(){
    document.getElementById("add").innerHTML = "Welcome to the ps";
    document.getElementById("add").style.color ="blue";
    document.getElementById("add").style.backgroundColor = "yellow";
    document.getElementById("add").style.fontSize = "25x";
    document.getElementById("add").style.border = "4px soild red"

}
// input value
function f1() {
    let s1='<div class="add0">';
           s1+='<div class="add">';
              s1+='<div class="add1">'
               s1+=' <div class="label"><label for="op1"> Enter number 1 </label></div>'
               s1+=' <div class="input"><input type="text" id="op1" value="0" /></div>'
             s1+=' </div>'
              s1+='<div class="add1">'
                s1+='<div class="label"><label for="op2"> Enter number 2 </label></div>'
                s1+='<div class="input"><input type="text" id="op2" value="0" /></div>'
              s1+='</div>'
              s1+='<div class="add1">'
                s1+='<div class="label"><label for="op3"> Result </label></div>'
                s1+='<div class="input"><input type="text" id="op3" value="0" /></div>'
              s1+='</div>'
              s1+='<div class="add1">'
               s1+=' <div class="input">'
                 s1+=' <input type="button" value="add" onclick="f2()" />'
                s1+='</div>'
             s1+=' </div>'
     s1+='</div>'
     s1+='</div>'
     document.getElementById("m1").innerHTML= s1;
}


function f2(){
    let a = parseInt(document.getElementById("op1").value) ;
    let b = parseInt(document.getElementById("op2").value) ;
    let c = a+ b;

    document.getElementById("op3").value = c;

}


// check even or odd
function f3(){
    let s1='<div class="add0">';
           s1+='<div class="add">';
              s1+='<div class="add1">'
               s1+=' <div class="label"><label for="num"> Enter number</label></div>'
               s1+=' <div class="input"><input type="text" id="num" value="0" /></div>'
             s1+=' </div>'

            s1+='<div class="add1">'
                s1+='<div class="label"><label for="res"> Result </label></div>'
                s1+='<div class="input"><input type="text" id="res" value="0" /></div>'
            s1+='</div>'
            s1+='<div class="add1">'
               s1+=' <div class="input">'
                 s1+=' <input type="button" value="add" onclick="f3()" />'
                s1+='</div>'
            s1+=' </div>'
     s1+='</div>'
     s1+='</div>'
     document.getElementById("m2").innerHTML= s1;
}


function f4(){
    let number = parseInt(document.getElementById("num").value)  // input value
    if(number % 2 == 0) {
        document.getElementById("res").value = "The number is even."; // add the result 
    }
    else {
        document.getElementById("res").value = "The number is odd.";
    }
}