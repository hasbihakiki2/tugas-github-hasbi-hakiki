var numbers = [1,2,3,4,5]
var jumlah = 9
var n=numbers.length;

function penjumlahanArray(numbers){
    for(var i=0; i<n-2; i++){
        for(var j=i+1; j<n-1;j++){
            for(var k=j+1;k<n;k++){
                if(numbers[i]+numbers[j]+numbers[k]=== jumlah){
                    console.log(numbers[i]+"+"+numbers[j]+"+"+numbers[k]);
                }
                }
            }
        }
    }
console.log(penjumlahanArray(numbers))