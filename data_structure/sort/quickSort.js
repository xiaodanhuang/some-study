function quickSort(arr,left,right){
    if(left>=right) return
    var mid=partition(arr,left,right)
    quickSort(arr,left,mid-1)
    quickSort(arr,mid,right)
}
function partition(arr,left,right){

    var i=left,j=right,p=arr[right];
    while(i<j){
        while(i<j&&arr[i++]<=p)
        {i++};
        while(i<j&&arr[j]>=p)
        {j--};
        if(i<j){
            swap(arr,i,j)
        }
    }
    swap(arr,i,right)
    return i;

}
function swap(arr, i, j) {
    var a = arr[i]
    arr[i] = arr[j];
    arr[j] = a;
}

var arr=[7,3,2,8,1,9,6,7,5,4,6,10]
quickSort(arr,0,arr.length-1)
console.log(arr)
