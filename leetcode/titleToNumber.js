//171 Excel表列序号
var titleToNumber = function(s) {
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let arr=s.split("").reverse()
    let sum=0;
    arr.map((item,index)=>{
        let strIndex=str.indexOf(item)+1;
        sum+=Math.pow(26,index)*strIndex

    })
    return sum

};
console.log(titleToNumber("AB"))