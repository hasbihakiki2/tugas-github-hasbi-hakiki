var k=25;
var x = 0
var angkaTemp=1;
function deretNegation(k){
    for (var i= 0; i<k; i++){
        if( i%2 === 0){
            x = x+angkaTemp*-1;
            console.log(x)
        }else{
            x=x+angkaTemp*1;
            console.log(x)
        }
        angkaTemp++
    }
}
console.log(deretNegation(25))