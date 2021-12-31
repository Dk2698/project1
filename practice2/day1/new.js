class Add {
  n4 = 0;
  constructor(x, y) {
    this.n1 = x;
    this.n2 = y;
    this.n3 = 0;
    // this is prototy[pe]
  }

  cal() {
    this.n3 = this.n1 + this.n2;
  }

  mul() {
    this.n3 = this.n1 * this.n2;
  }
  div() {
    this.n3 = this.n1 / this.n2;
  }

  display() {
    console.log(this.n1 + " " + this.n2 + " " + this.n3);
  }
}

let obj = new Add(10, 20); // create the object using new operator and obj like pointer or refernce
obj.cal(); // call the method
obj.display();

let m = new Add(20, 50);
m.mul();
m.display();

let d = new Add(50, 10);
m.div();
m.display();



let obj2 = new multiplication(14,12);
obj2.calval()

console.log(obj2 instanceof(multiplication))
