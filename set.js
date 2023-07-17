let band=new Set();
band.add("indore");
band.add("pune");
band.add("delhi");
band.add("hyderbad");
band.add("indore");
console.log(band);

band .delete();
console.log(band);

if(band.has("delhi")){
    document.write("delhi is present in list");

}
else{
    document.write(" delhi not there. sorry");

}

// iterated
for(const i of band){
    document.write(" " +i);
}