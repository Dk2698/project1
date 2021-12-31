var data = [
  {
    id: "101",
    name: "Ready Player One",
    image: "/images/airpods.jpg",
    weight: "6.5k",
    type: "Frontend",
    price: 89.99,
    countInStock: 10,
    color: "red",
    size: "2ft x 3ft x 4ft",
  },
  {
    id: "102",
    name: "The Circle",
    image: "/images/airpods.jpg",
    description: " Bluetooth technology lets you",
    weight: "6.5k",
    type: "Frontend",
    price: 89.99,
    countInStock: 10,
    color: "red",
    size: "2ft x 3ft x 4ft",
  },
  {
    id: 101,
    name: "washingMachine",
    image: "/images/airpods.jpg",
    description:
      " Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    weight: "6.5k",
    type: "Frontend",
    price: 89.99,
    countInStock: 10,
    color: "red",
    size: "2ft x 3ft x 4ft",
  },
];

let substring = "est c";
let sub = substring.toLowerCase();
let filteredData = data.filter(function (book) {
  let num1 = book.name.toLowerCase()
  return num1.includes(sub)
});

// let freelancers = [
//     {
//         name: "Harry", skill: "JavaScript"
//     },
//     {name: "Mark", skill: "Python"},
//     {name: "David", skill:"JavaScript"}];

// let javascript_freelancers = freelancers.filter(function(freelancer) {
//     return freelancer.skill == "JavaScript"; });

// console.log(javascript_freelancers);

function handleSearch() {}

// let btn = document.getElementById("btn")
// btn.addEventListener("click", handleSearch)

/*
  returns [
    {
      title: 'Ready Player One',
      author: 'Ernest Cline'
    }
  ]
  */
