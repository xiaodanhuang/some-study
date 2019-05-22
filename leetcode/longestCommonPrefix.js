//14 最长公共前缀
function longestCommonPrefix(strs){
    strs.sort();
    let minStr=strs[0];
    let maxStr=strs[strs.length-1];
    let commonStr=''
    if(!minStr||!maxStr){
        return commonStr
    }
    for(i=0;i<minStr.length&&i<maxStr.length;i++){
        if(minStr[i]==maxStr[[i]]){
            commonStr+=minStr[i]
        }else{
            return commonStr
        }
    }
    return commonStr
}
console.log(longestCommonPrefix(['a']))