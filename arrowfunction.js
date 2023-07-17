// add two num
let add=(num1, num2) => num1 + num2;

document.write(add(7,8));

// print

let greeting =()=> " hello world !!";

document.getElementById("out").innerHTML=greeting();

// greater between a,b
const great=(a,b)=> {
    if(a>b){
        return " a is greater than b";

    }
    else {
        return " b is a greater than a";
    }
}


let a=prompt(" a is ");
let b = prompt( " b is ");
 document.write(great(a,b));