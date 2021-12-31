console.log(" I ");
console.log(" eat ")
console.log(" Ice Cream ")


console.log("I")
setTimeout(()=>{
    console.log("eat");
},2000)

console.log("Ice Cream")


// function One(){
//     // do something
// }
// function Two(){
//     // do somethings else
//     call_one()
// }

// Two(One) ; // code is being executed


async function f1(){
    console.log("async function");
    return Promise.resolve(1)
}
f1().then(function(result){
    console.log(result)
})


// a promise 
 let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')
    },4000)
 })

 async function f3(){
     // wait until the promise resolve
     let result = await promise;

     console.log(result)
     console.log("hello")

 }
 // call async
 f3() // resolve the 
 f3().catch(function(){
    reject("error")
 }
 )