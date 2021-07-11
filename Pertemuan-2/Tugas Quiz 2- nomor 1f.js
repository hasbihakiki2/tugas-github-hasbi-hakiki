var fruits = ["Jeruk","Mangga","Rambutan","Bangkuang","Banana"];
var sayur = ["Kangkung","Bayam","Tomat","Bawang","Bayam"];

function displayOutput(fruits){

fruits.splice(4,1,'Nangka');
return fruits;
}
console.log(displayOutput(fruits))