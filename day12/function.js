// we will call one function after completion that function it can return a value or its can call back another function

// callback function 

function call(sum){
    console.log("sum of two number is "+ sum)
}

function fun(x,y,z){
    let l1 = x + y ;
    z(l1); 
    console.log("inner function")
}
fun(10, 20, call) // passing function

// closure 
function outer() {
    let count=0;
    return function (){
        
    }
    
}
let clo =new outer()
console.log("inner function" + clo())