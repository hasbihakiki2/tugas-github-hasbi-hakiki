var angka = "3456";
 
function Penjumlahan(angka){
    var jumlah=0;
    for(var i=0;i<angka.length;i++){
        jumlah=jumlah+parseInt(angka[i])
    }
    return jumlah
}
console.log(Penjumlahan(angka))
