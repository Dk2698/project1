class Employee{
    constructor(id,name,email,address){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}

let obj = new Employee("arg1","arg2")


function Dog(dogName,weight,color,bread){
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.bread = bread;
}

let dog1 = new Dog("Jacky", 30,"brown", "labrador")

// same synatx 
class Dog1{

    constructor(dogName,weight,color,bread){
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.bread = bread;
    }
}

let dog = new Dog1("Javascript", 2.4,"brown", "chinahua")
console.log(dog.dogName,"is a", dog.bread)

class Person{
    
    constructor(firstname,lastname = "Doe"){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // donot ue the function keyword and this keyword using property  this.property
    greet(){
        console.log("hi there ! i; m", this.firstname)
    }

    compliment(name,object){
        return "Thats a wonderful" + object + ","+ name;
    }
}
// add property to  class form outside of the class
Person.prototype.Age = 23

console.log(Person.prototype)

let p = new Person("maaike");
console.log("hi", p.firstname , p.lastname, p.Age);

let p2 = new Person("maaike","jone");
console.log("hi", p2.firstname , p2.lastname);
p2.greet()// call method

// passing to argumnet 
let compliment = p2.compliment("harry","hat")
console.log(compliment)

// arenot accessible from ouside
// same validation 
class Person1{
    #firstname ;
    #lastname;
    constructor(firstname,lastname){
        if(firstname.startsWith("M")){
            this.#firstname = firstname; 

        } else{
            this.#firstname = "M" + firstname ;

        }
        this.#lastname = lastname;
    }


    //getters and setters
    get firstname(){
        return this.#firstname
    }

    set firstname(firstname){
        this.#firstname  = firstname
    }

}

let p3 = new Person1("maria", "sega")
console.log(p3.firstname) // using set and get method return automatically
p3.firstname ="name";


function outerFunc() {

    let outerVar = 'I am outside!';
    function innerFunc() {
      console.log(outerVar); 
    }
    innerFunc();
}
outerFunc();


// ex
function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
      console.log(outerVar); 
    }
    return innerFunc;
  }
  function exec() {
    const myInnerFunc = outerFunc();
    myInnerFunc();
  }
  exec();
