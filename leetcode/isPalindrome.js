//9 回文数
function isPalindrome(x){
    let reverseX=x.toString().split('').reverse().join('');
    if(reverseX==x){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome(10))