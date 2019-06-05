//168 Excel表列名称
var convertToTitle = function(n) {
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let s=''
    while(n>26) {
        let index = n % 26;
        index == 0 ? s += "Z" : s += str[index - 1]
        n = index!=0?(n - n % 26)/26 : (n - n % 26)/26-1
    }
    let index = n % 26;
    index == 0 ? s += "Z" : s += str[index - 1]
    return s.split("").reverse().join("")
}
console.log(convertToTitle())