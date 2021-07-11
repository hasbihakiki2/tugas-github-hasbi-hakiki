var char = "abcdefg"
function isUnique(char){
    var x = {};
    for (var i=0;i<char.length;i++){
            if(char.lastIndexOf(char[i]) !== i){
                return false
            }
        }
        return true
    }
console.log(isUnique(char))