//28 实现strStr()
var strStr = function (haystack, needle) {
    if (needle == "") {
        return 0
    }
    let hays = haystack.split("");
    for (let i = 0; i < hays.length; i++) {
        if (hays[i] == needle[0] && haystack.substring(i, i + needle.length) == needle) {
            return i
        }
    }
    return -1

};
console.log(strStr("aaaaa", "bba"))
