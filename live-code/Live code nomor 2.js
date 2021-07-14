let str = "saya dan Saya suka makan nasi "

function stringtoArray(str) {
        let array = [];
        let tempStr ='';
        for (let i = 0; i <=str.length; i++) {
            if (str[i] !==' '){
                tempStr += str[i];
            }else {
                array.push(tempStr);
                tempStr = '';
            }
        }
        return array;
}

function uniqueDuplicateFinder(str){
    let temp = [];
    let object = {};
    array.forEach(function(item){
        if (!object[item]){
            object[item]=0;
            object[item]+= 1;
        })
    for (let prop in object){
        if (object[prop] >= 2){
            result.push(prop)
        }
    }
    }
}


console.log(uniqueDuplicateFinder(str))


