let sqr = (x) =>{
    with(Math){
        var result = sqrt(x);
    }
    return result
}

console.log(sqr(10))


var arr=[5,6,7]
let closure1=()=>{
    let i =0;
    return ()=>{
        return arr[i++]
    }
    
}

let closure2 = closure1();
console.log(closure2()) 


let closure3=(num)=>{
    console.log(num())
}

closure3(closure2)
closure3(closure2)
closure3(closure2)




