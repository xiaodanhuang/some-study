//125 验证回文串
var isPalindrome = function(s) {
    let str=s.match(/[a-zA-Z0-9\u4e00-\u9fa5]+/g)
    if(!str) return true
     str=str.join('').toLowerCase();
    let reserveStr=str.split("").reverse().join('')
    if(str==reserveStr){
        return true
    }else{
        return false
    }


};

console.log(isPalindrome(" sd"))