var a= 9;
var b= 5;

function swapnumber(numb){
a=a+b;
b=a-b;
a=a-b;

return a
}
console.log(swapnumber(a));
console.log(swapnumber(b));