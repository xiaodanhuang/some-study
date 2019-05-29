//119 杨辉三角 II
var getRow = function(rowIndex) {
    if(!rowIndex) return [1]
    let arr=[1];
    for(let i=2;i<=rowIndex+1;i++){
        let currrent=[]
        for(let j=0;j<i;j++){
            if(j==0||j==i-1){
                currrent.push(1)
            }else{
                let left=arr[j-1];
                let right=arr[j]
                currrent.push(left+right)
            }
        }
        arr=currrent
    }
    return arr

};
console.log(getRow(3))