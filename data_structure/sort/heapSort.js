//堆排序
function heapSort(arr){
    for(var j=arr.length-1;j>=0;j--) {
        for (var i = Math.floor((j - 1) / 2); i >= 0; i--) {
            heapify(arr,j, i)
        }
        swap(arr,0,j)
    }
}
function heapify(arr,j,i){
    var  left=j>=2*i+1?2*i+1:null;
    var  right=j>=2*i+2?2*i+2:null;
    var max=i
    if(left){
        max=arr[left]>arr[i]?left:i

    }
    if(right){
        max=arr[right]>arr[max]?right:max

    }
    if(max!=i){
        swap(arr,max,i)
        heapify(arr,max)
    }
}

function swap(arr, i, j) {
    var a = arr[i]
    arr[i] = arr[j];
    arr[j] = a;
}
var heap=[2,5,3,1,10,4]
heapSort(heap)
console.log(heap)