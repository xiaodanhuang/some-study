//7 整数反转
function reverseNumber(x) {
    let arr = (x>0?x:-x).toString().split('').reverse();
    let data=x>0?arr.join('')-0:-arr.join('')-0;
    if(data>Math.pow(2,31)-1||data<=Math.pow(-2,31)){
        return 0
    }
    return x>0?arr.join('')-0:-arr.join('')-0;
};
