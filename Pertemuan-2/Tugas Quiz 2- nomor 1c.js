var fruits = ["Jeruk","Mangga","Jambu","Durian","Rambutan","Anggur","Banana"];
var sayur = ["Kangkung","Bayam","Tomat","Bawang","Bayam"];

function displayOutput(fruits){

fruits.splice(2,1);
return fruits;
}
console.log(displayOutput(fruits))
