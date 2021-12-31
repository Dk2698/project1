let a = 100;

if (a == 1) {
  console.log("Adding 10 to ", a);
  a += 10;
  console.log("a: ", a);
}

if (a > 2) {
  console.log("Forcing a to be 1 in a strange way", a);
  a = a - (a - 1);
  console.log("a: ", a);
}


let n3 ="10 * 5"
console.log("before eval " + n3 )
console.log("before eval " + eval(n3) )





