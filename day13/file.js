let but1 = document.getElementById("btn1");
let num1 = 0;
let num2 = 0;
but1.addEventListener("click", function (event) {
  event.preventDefault();
  let num3 = "";
  num1 = document.getElementById("a1").value;
  num2 = document.getElementById("a2").value;
  num3 = num1 + num2;
  document.getElementById("result").innerHTML = num3;
});

var v1 = 10;
console.log("variable " + v1);
var v2 = [10, 20, 30, 20];
console.log("array : " + v2);

console.log("-----------------using index and for loop ");
for (i = 0; i < v2.length; i++) {
  console.log(v2[i]);
}

console.log("-----------------using for each  for loop ");
for (let x of v2) {
  console.log(x);
}

// add element to the array
console.log("array after push : " + v2);

let q1 = v2.pop();
console.log("pop from array " + q1);
console.log("array after pop : " + v2);

let q3 = v2.splice(0, 1);
console.log("splice  from array " + q3);
console.log("array after splice  : " + v2);

let q4 = v2.shift();
console;
v2.push(100);
console.log("shift from array " + q4);
console.log("array after shift  : " + v2);

let q6 = v2.splice(0, 2);
console.log("splice  from array " + q6);
console.log("array after splice  : " + v2);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// create  a set
const fruit = new Set(fruits);
// add the value
fruit.add("Kiwi");
fruit.add("Orange");

//  console.log(fruit)

// foreach
fruit.forEach(function (value) {
  console.log("value:" + value);
});

// Create an Iterator
const myIterator = fruit.entries();

// List all Entries
for (const entry of myIterator) {
  console.log("key:" + entry[0] + "  " + "value:" + entry[1]);
}


// 1) store city and population in collection which ever the city is asked give the polulation
// 2) store product id and product details  which ever the product id is given show the respective product detail
//    with diffent spcification

let city =[
    {
        name:"up",
        population:666666
    },
    {
        name:"Delhi",
        population:666666
    }

]
console.log(city[1].name)

var render = function(city) {
    var app = document.getElementById('app');
    console.log(data)
    var productHTMLString = '<ul>'+
      data.map(function(product){
        return '<li>'+
                '<strong>Name: </strong>' + product.name + '<br/>' +
                '<strong>Description: </strong>' + product.description+ '<br/>' +
                '<strong>Brand: </strong>' + product.brand + '<br/>' +
                '<strong>Category: </strong>' + product.category + '<br/>' +
                '<strong>Price: </strong>' + product.price + '<br/>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = productHTMLString;
}


let btnSearch = document.getElementById('btnsearch');
btnSearch.addEventListener("click", handleSearch);

var handleSearch = function(){
    
}