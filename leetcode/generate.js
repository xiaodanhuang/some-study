//118 杨辉三角
var generate = function(numRows) {
    if(!numRows) return []
    let arr=[[1]];
    for(let i=2;i<=numRows;i++){
        let before=arr[i-2]
        let currrent=[]
        for(let j=0;j<i;j++){
            if(j==0||j==i-1){
                currrent.push(1)
            }else{
                let left=before[j-1];
                let right=before[j]
                currrent.push(left+right)
            }
        }
        arr.push(currrent)
    }
    return arr
};
console.log(generate(5))