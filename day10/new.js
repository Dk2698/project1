function f1(){
    let val1 = parseInt(document.getElementById("v1").value);
    console.log(val1)
    let fact =0;
    if(val1 <0){
        document.getElementById("a1").innerHTML = "Negative number not allowd"
    } else{
        fact = f2(val1);
        document.getElementById("a1").innerHTML="Factorail of the number is ..." +fact;
    }

}

// anoymous function passing parameter
let f2 = function(fact){
    if(fact === 1 || fact===0){
        return 1 ;
    }
    else 
    return (fact * f2(fact-1)) ;
}

//  arrow  function
let f3 = (fact) =>{
    if(fact === 1 || fact===0){
        return 1 ;
    }
    else 
    return (fact * f3(fact-1)) ;
}

let sum = () =>{

   // let num =[]; // local variable
    let sum1 =0;
    let avg =0;
    let val1 =parseInt(document.getElementById("v2").value);

    if(val1 < 1){
        document.getElementById("a2").innerHTML ="No number is selected/invalid number"
    }
    else {
        for(i = 0; i<val1;i++){
            num.push(parseInt(prompt("Enter number" +(i+1),0)))
            sum1 +=num[i]
        }
        
    avg = sum1/num.length;
    if(confirm("do i need to display all number")){
            let dis =""
            num.forEach((x)=>{ dis+="<div>" + x +"</div>"})
            document.getElementById("a2").innerHTML = dis

        }
    alert("sum = "+ sum1 + "avg ="+ avg)
        // document.getElementById("a2").innerHTML = " Sum of number"+ sum1 + "Average of number" + avg;
}
}


// using filiter
let num =[]; // global variable
let  f5 = () =>{
    
    let dis = "";
    num.forEach((x)=>{
        if(x%2===0){
            dis+="<div>"+x+"</div>"
        }
    });
    document.getElementById("a3").innerHTML = dis;

}

let f6 = ()=>{
    let dis ="" ;
    num.forEach((x)=>{ if(x%2!==0) {dis+="<div>" + x +"</div>"}})
    document.getElementById("a3").innerHTML = dis

}

let f7 = ()=>{
    let dis ="";
    let num1 = parseInt(document.getElementById("v3").value);

    num.forEach((x)=>{ 
        if(x < num1) {dis+="<div>" + x +"</div>"}
    });
    document.getElementById("a3").innerHTML = dis
}

let f8 = ()=>{
    let dis ="";
    let num1 = parseInt(document.getElementById("v3").value);

    num.forEach((x)=>{ 
        if(x > num1) {dis+="<div>" + x +"</div>"}
    });
    document.getElementById("a3").innerHTML = dis
}

let f9 = ()=>{
    let dis ="";
    let num1 = parseInt(document.getElementById("v3").value);

    num.forEach((x)=>{ 
        if(x === num1) {dis+="<div>" + x +"</div>"}
    });
    document.getElementById("a3").innerHTML = dis
}