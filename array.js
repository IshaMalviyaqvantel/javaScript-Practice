let std=[" isha","Prachi","suvigya"];
document.getElementById("res").innerHTML=std[2];
document.write(std.length);
let i=0;
while(i<std.length){
    document.getElementById("res").innerHTML+=std[i]+"<br>";
    i++;
}
std[3]=" ram";
document.write (std);
std.pop();
document.writeln(std);