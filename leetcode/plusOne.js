//66 加一
var plusOne = function(digits) {
    let flag=0;
    for(let i=digits.length-1;i>=0;i--){
        let result=0;
        if(i==digits.length-1){
             result=flag+digits[i]+1;

        }else{
            result=flag+digits[i];
        }

        if(result>=10){
            digits[i]=result%10;
            flag=1
        }else{
            digits[i]=result;
            flag=0
        }
    }
    if(flag){
        digits.unshift(1)
    }
    return digits

};
console.log(plusOne([9,9]))