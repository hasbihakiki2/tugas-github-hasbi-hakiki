var angka = 5;
function factorial(angka){
    if(angka===0){
        return 1;
    }else{
        return angka*factorial(angka-1);
    }
}
console.log(factorial(5));