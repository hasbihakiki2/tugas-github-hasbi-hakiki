var fruits = ["Jeruk","Mangga","Jambu","Durian","Rambutan"];
var sayur = ["Kangkung","Bayam","Tomat","Bawang","Bayam"];
var concatFrusay = ["Jeruk","Mangga","Jambu","Durian","Rambutan","Kangkung","Bayam","Tomat","Bawang","Bayam"];

function displayOutput(concatFrusay){

for (var i=0; i<concatFrusay.length; i++){
    var vege = concatFrusay[i];
    switch (vege){
        case 'Jeruk':
        concatFrusay.splice(7,1," ")
        break;
        default:
        concatFrusay.splice(0,1,"Tomat")
        break;

    }
    return concatFrusay
}
}

console.log(displayOutput(concatFrusay))