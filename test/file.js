// export default addTwoNumber;

// function(num1,num2)

module.exports = {
  add: (num1, nmu2) => {
    return num1 + nmu2;
  },

  evenodd: (num1) => {
    if (num1 % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
  },

  dob: "12.12.202",
};

//validation
// let f1 = (name)=>{
//     let re = new RegExp(/DXC/, 'i')
//     if(name.match(re)){
//         return true;
//     } else{
//         return false
//     }
// }

// module.exports = f1;

// console.log(f1("dme001"))

//

var a = "122222288";
var pattern = /\d{10}/;
let re = a.match(pattern)
// console.log(re)


var str = "RegExr was created by gskinner.com, and is proudly hosted by Media Temple."
let res = /\w{4,5}/

let result = str.match(res)
console.log(result)

