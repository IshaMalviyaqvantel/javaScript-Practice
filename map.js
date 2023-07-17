let team= new Map(
    [
        [ "1"," apple"],
        ["2"," orange"],
        ["3", " banana"],
        ["4"," mango"],
        ["5"," grape"]
    ]
);
console.log (team);
// to get value
document.getElementById("result").innerHTML=team.get("3");
//add new
team.set("6","cherry");


// iterated map
for(const [key,value] of team){
    document.write(" key : "+key+" value : "+value);
    document.write("<br>");
}