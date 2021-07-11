var kata = "aku suka bootcamp sentul city";

function maxWordLength(kata){
    var kataPerKata=kata.split(" ");
    var x=0;
    var kataaa=0;
    for (var i=0; i<kataPerKata.length-1; i++){
        if(x<kataPerKata[i].length){
            x=kataPerKata[i].length;
            kataaa=kataPerKata[i]

        }
    }
    return kataaa;
}
console.log(maxWordLength(kata))