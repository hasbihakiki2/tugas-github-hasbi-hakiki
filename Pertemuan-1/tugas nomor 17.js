var langkah = 8;
var strLangkah = "UDDDUDUU";
var gunung = 0;

function hitungGunung(gunung){
    var lvl = 0;
    var gunung = 0;
    for(var i=0; i<langkah; i++){
        if(strLangkah[i]==='U'){
            lvl++;
            if(lvl===0){
                gunung++;
            }
        }else{
            lvl--;
        }
    }
    return gunung;
    }
console.log(hitungGunung(gunung));
