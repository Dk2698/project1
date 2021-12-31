// assignment2


let f4 =() =>(10);
let f5 =() =>{return 10}
let f6 =() =>(z,b) =>(z+b)

// calling 
console.log("Calling lambada ex "+ f4())
console.log("Calling lambada ex "+ f5())
console.log("Calling lambada ex "+ f6(2,4))

// self evaluting 
// () =>{
//     console.log("I am in self evaluting")
// }


let x = function(){
    console.log("i am in self evalying function")
} ();



// create
function x1(){
    console.log(" i am in instance method ")
}

let x2 = new x1()  // x2 object 
x2; // call the object