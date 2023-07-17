// print hello using function
function printHello(){
    alert("Hello World  !!");

}
// call function 
printHello();


// second method
 let announcement= function(){
    alert(" you are learning javascript");

 }
 announcement();

 // cube of number

 
 let cubing = function(x)
 {
    document.getElementById("out").innerHTML= x*x*x;
 }
 let num=prompt(" Enter a number : ");

 cubing(num);

 // area of rectangle

 let area_rectangle= function(l,b){
    let area=l*b;
return area;
 }
let length= prompt("Enter a length of rectangle : ");
let breath= prompt("Enter a breath of rectangle :");
document.getElementById("out").innerHTML=" the area of rectangle :"+area_rectangle(length,breath);