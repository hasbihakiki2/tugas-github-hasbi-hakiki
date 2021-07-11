var fruits = ["Jeruk","Mangga","Durian","Rambutan","Anggur","Banana"];
var sayur = ["Kangkung","Bayam","Tomat","Bawang","Bayam"];

function displayOutput(fruits){

fruits.splice(2,3);
return fruits;
}
console.log(displayOutput(fruits))
