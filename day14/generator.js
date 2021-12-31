// generator 

function *evengen(start, end){
    for(i=start;i<=end;i++){
        if(i%2==0){
            yield i;
        }
    }
    return;
}

let gen1 = evengen(10,20)
for(j=0;j<gen1.length;j++){
    console.log("from generator" + gen1.next().value)
}