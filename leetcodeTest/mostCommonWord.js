var mostCommonWord = function(paragraph, banned) {
    let  str=paragraph.replace(/,/g,"").replace(/\./g,"").replace(/\!/g,"").replace(/\?/g,"").replace(/\;/g,"").toLowerCase()

    banned.forEach(item=>{

        str=str.replace(new RegExp(item,'g'),"")
    })
    let arr=str.split(" ");
    let num=[]
    for(let i=0;i<arr.length;i++){
        let time=0;
        if(arr[i]=="")continue
        arr.map(items=>{
            if(arr[i]==items) time++
        })
        num[time]=arr[i]
    }

    return num[num.length-1]



};
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]))