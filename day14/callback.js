function serverRequest(query, callback){
    setTimeout(function(){
      var response = query + "full!";
      callback(response);
    },5000);
  }
  
  function getResults(results){
    console.log("Response from the server: " + results);
  }
  
  serverRequest("The glass is half ", getResults);
  
  // Result in console after 5 second delay:
  // Response from the server: The glass is half full!
  

  /** 
Let's create a foo function that takes a
function as an argument. Here we invoke 
the passed function bar inside foo's body.
*/
function foo(bar) {
    bar();
}
/**
Invoke foo by passing a function as an argument.
*/
foo(function() {
    console.log('bar');
}); // Output, bar

// Notice that we have passed the entire function definition as an argument to foo. The passed function doesn't have a name. It is called an anonymous function.


function *onload(){
  for(let i of product.keys()){
    let pdetails= product.Get(i);
    console.log(pdateials) 
    let s="";
    for(let x of details){
      for(let y of x){

      }
    }
    yield s;
  }
  return;
}





