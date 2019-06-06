//190 颠倒二进制位
var reverseBits = function(n) {
    var res = (n).toString(2);
    while(res.length<32){
        res = '0'+res;
    }
    res = res.split('').reverse().join('');
    return parseInt(res, 2);

};
console.log(reverseBits("00000010100101000001111010011100"))