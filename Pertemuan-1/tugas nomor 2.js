function reverse(num){
    var num = 1234;
    x=num+"";
    return x.split("").reverse().join("");
}
console.log(reverse(1234));