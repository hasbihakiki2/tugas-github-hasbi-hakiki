var kata="kasur ini rusak";
function isPolindrome(kata) {
    var arrkata = kata.split('');
    var reversearrkata = arrkata.reverse();
    var reversekata = reversearrkata.join('');

    if(kata===reversekata){
        return true;
    }else{
        return false
    }
}
console.log(isPolindrome(kata))