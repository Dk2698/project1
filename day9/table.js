
function funn(){
    var num= document.getElementById("input").value
    let res =""

    res += "<table border='1'>" ;

    for(let i=1;i<=10;i++){
        result = result + "<p>" + num + "*" + i+ "=" + num * i+"</p>"
    }
    res += "</table>"
    document.getElementById("res").innerHTML =result;
}


function fun4(){

    var s1= "<table border='1'>"
    var n = parseInt(document.getElementById("a1").value);

    for(let i=1;i<=10;i++){
        s1 += ("<tr> <td> " +n +"</td> </td> X </td> <td>" + i+ </td></td></tr>")
    }
    s1 += "</table>"
    document.getElementById("res").innerHTML =s1;
    

}