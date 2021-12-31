let a =10 // primitive
console.log(a);
console.log(typeof(a))

a = "welcome"
console.log(a);
console.log(typeof(a))

let b = [10,20,30] ; // compliste core object
let c = {
    id:"1001",
    fname:"Sapient"
}

console.log("length of the array is" + b.length)

console.log(c)
console.log(c.id)

let ar1 =[[1,2,4,6],[2,4]]


console.log("length of outer array" + ar1.length)
console.log("length of  inner array" + ar1[0].length + "element value" + ar1[0][3])

let n3 ="10 * 5"
console.log("before eval " + n3 )
console.log("before eval " + eval(n3) )
// assignment 1: craete a calcaulate to accept exprssion and display output