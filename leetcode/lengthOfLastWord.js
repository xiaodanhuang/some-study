//58 最后一个单词的长度
var lengthOfLastWord = function(s) {
    while(true){
        if(s.lastIndexOf(' ')>-1){
            if(s.lastIndexOf(' ')==s.length-1){
                s=s.substring(0,s.length-1)
                continue
            }
            return s.length-s.lastIndexOf(' ')-1

        }else{
            return s.length
        }
    }

};
console.log(lengthOfLastWord(""))