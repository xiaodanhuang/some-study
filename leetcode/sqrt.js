//69 x 的平方根
var mySqrt = function(x) {
    for(let i=Math.round(x/2);i>=0;i--){
        if(i*i<=x){
            return i
        }
        if(Math.round(i/2)*Math.round(i/2)>x){
            i=Math.round(i/2)
        }
    }
};
var mySqrt = function(x) {
    return Math.floor(Math.pow(x,.5))
};
console.log(mySqrt(16))