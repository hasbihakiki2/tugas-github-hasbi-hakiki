function howManyFrogjump (x,y,k){
    var x= 10;
    var y= 85;
    var k=30;


    if ((y-x)<k){
        frogJump = 1;
    }else  if ((y-x) % k === 0){
        frogJump = parseInt((y-x)/k);
    }else{
        frogJump = parseInt(((y-x)/k)+1)
    }
    return frogJump.toString();
}
console.log(howManyFrogjump(10,85,30))