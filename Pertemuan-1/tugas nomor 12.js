var angka = "234567"
function tampilkanGenap(angka){
    var angkaa=angka.split(" ");
    for (var i=1; i<7; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}
console.log(tampilkanGenap(angka));