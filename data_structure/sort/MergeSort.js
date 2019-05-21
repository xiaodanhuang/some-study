function mergeSort(arr,left,right){
    if(left==right){
        return
    }
    var mid=left+ Math.floor((right-left)/2)
    mergeSort(arr,left,mid)
    mergeSort(arr,mid+1,right)
    mergeArr(arr,left,mid+1,right)


}
function mergeArr(arr,left,right,rightBound){
    var new_arr=[]
    var  i=left,j=right;
    while(i<right&&j<=rightBound){
        new_arr.push(arr[i]<arr[j]?arr[i++]:arr[j++])
    }
    while(i<right){
        new_arr.push(arr[i++])
    }
    while(j<=rightBound){
        new_arr.push(arr[j++])
    }
    for(var i=0;i<new_arr.length;i++){
        arr[left+i]=new_arr[i]
    }
}

var arr=[2,1,7,8,3,6,9]
mergeSort(arr,0,arr.length-1)
console.log(arr)