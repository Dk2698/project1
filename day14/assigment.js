// var products = new Map([
//   [
//     "101",
//     [
//       ["productname", "washingMachine"],
//       ["size", "2ft X 3ft X 4ft"],
//       ["weight", "6.5kg"],
//       ["Type", "Frontend"],
//       ["color", "red"],
//       ["run", "SemiAutomatic"],
//     ],
//   ],
//   [
//     "102",
//     [
//       ["productname", "TV"],
//       ["size", "32inches"],
//       ["type", "LED"],
//       ["Warrenty", "1year"],
//     ],
//   ],
// ]);

var productlist = [
  {
    name: "Wirlpool",
    size: "3'x3'x5'",
    weight: "12 KG",
    color: "Red",
    function: "Automatic",
  },
  {
    name: "Samsung",
    size: "3'x3.25'x5.2'",
    weight: "10 KG",
    color: "Grey",
    function: "Semi-Automatic",
  },
  {
    name: "Apple",
    size: "4inch x 6inch",
    weight: "120 gm",
    color: "Black",
    function: "Smarphone",
  },
];

const btn = document.getElementById("btn");
btn.addEventListener("click", productlist);

function productlist() {
  const table = document.getElementById("table");
  var check = productlist;
}

function* product(data) {
    data.forEach(function (arrayItem) {
        yield arrayItem ;
    });
    return;
}

let gen = product(productlist);
let productid = gen.next().value;

console.log(productid);
