var k = 9;

function randomNumber(k){
        var angka1 = Math.floor((Math.random(k)*100))
        var angka2 = '9'+angka1;
        var angka3 = angka1+'9'
        console.log(angka2)
        console.log(angka3)
    
}
console.log(randomNumber(k))