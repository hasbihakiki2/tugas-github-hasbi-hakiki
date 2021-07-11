var fruits = ["Jeruk","Mangga","Banana"];
var sayur = ["Kangkung","Bayam","Tomat","Bawang","Bayam"];

function displayOutput(fruits){

fruits.splice(2,0,'Rambutan','Bangkuang');
return fruits;
}
console.log(displayOutput(fruits))