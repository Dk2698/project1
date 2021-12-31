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
     s1+=' </div>'
         s1+=' </div>'
         document.getElementById("m1").innerHTML=s1
  
  
  }
  function f2(){
    let a=parseInt(document.getElementById("op1").value);
    let b=parseInt(document.getElementById("op2").value);
   let c=a+b;
   document.getElementById("op3").value=c;
  }

function f3(){
    let s1='<div class="add0">';
    s1+='<div class="add">';
       s1+='<div class="add1">'
        s1+=' <div class="label"><label for="op4"> Enter number 1 </label></div>'
        s1+=' <div class="input"><input type="text" id="op4" value="0" /></div>'
      s1+=' </div>'
       s1+='<div class="add1">'
         s1+='<div class="label"><label for="op5"> Result </label></div>'
         s1+='<div class="input"><input type="text" id="op5" value="0" /></div>'
       s1+='</div>'
       s1+='<div class="add1">'
        s1+=' <div class="input">'
          s1+=' <input type="button" value="Odd/Even" onclick="f4()" />'
         s1+='</div>'
      s1+=' </div>'
    s1+=' </div>'
  s1+=' </div>'
  document.getElementById("m1").innerHTML=s1

}  
// check odd even
function f4(){
    let a=parseInt(document.getElementById("op4").value);
    if (a%2==0)
   document.getElementById("op5").value="Even";
   else
   document.getElementById("op5").value="Odd";

  }

  // insert form

  function adduser(){
    let s1='<div class="add0">';
             s1+='<div class="add">';
                s1+='<div class="add1">'
                 s1+=' <div class="label"><label for="op1"> UserID </label></div>'
                 s1+=' <div class="input"><input type="text" id="op1"/></div>'
               s1+=' </div>'
                s1+='<div class="add1">'
                  s1+='<div class="label"><label for="op2"> First Name</label></div>'
                  s1+='<div class="input"><input type="text" id="op2"  /></div>'
                s1+='</div>'
                s1+='<div class="add1">'
                  s1+='<div class="label"><label for="op3"> City </label></div>'
                  s1+='<div class="input"><input type="text" id="op3"  /></div>'
                s1+='</div>'
                s1+='<div class="add1">'
                 s1+=' <div class="input">'
                   s1+=' <input type="button" value="Insert User" onclick="insertuser()" />'
                  s1+='</div>'
               s1+=' </div>'
       s1+=' </div>'
      s1+=' </div>'
      document.getElementById("m1").innerHTML=s1
    
  }


//  add the data in array  in form of object
  var userdata = [];
  function insertuser(){
    let user = {id: document.getElementById("op1").value, fname: document.getElementById("op2"),city: document.getElementById("op3").value}
    userdata.push(user);
    document.getElementById("m1").innerHTML = "user data addded"
  }


// display data
  function displayuser(){
    let s1="<table border='1'>"
    s1+="<tr><td>"+"User ID"+"</td><td>"+"First Name"+"</td><td>"+"User City"+"</td></tr>"
    for(i=0;i<userdata.length;i++)
    {
      s1+="<tr><td>"+userdata[i].id+"</td><td>"+userdata[i].name+"</td><td>"+userdata[i].city+"</td></tr>"
    }
    s1+="</table>";
    document.getElementById("m1").innerHTML=s1;
  }