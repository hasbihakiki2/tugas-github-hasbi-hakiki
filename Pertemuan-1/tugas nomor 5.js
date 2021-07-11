var kata = "aku suka javascript";

function cariHuruf(kata){
    var cari= kata.includes('a','k','u','s','j','v','c','r','i','p','t')
    if (cari===true){
        return true;
    }else{
        return false;
    }
}
console.log(cariHuruf(kata))