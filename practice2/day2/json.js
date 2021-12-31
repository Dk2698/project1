// create the json object
let f2 =() =>{
    console.log("in side f2")
}
let stud ={
    id:"1001",
    qualification :["B.Sc","B.Com"],
    f1 :(v1)=>{
        console.log("I am in function", stud.id); // this.id
        v1();
    }
}

// stud.f1();
console.log(stud.qualification[0])
stud.f1(f2);


// namespacing 
var testname ={

    myobj: class Test{
        f1=()=>{
            var n1 = 10;
            console.log("namespacing")
        }
    },

    myfunction: ()=>{
        console.log("hello")
    }
}

var a =  new testname.myobj()
a.f1()
testname.myfunction()
