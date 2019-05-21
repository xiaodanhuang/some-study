function insertSort(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i;j>=0;i--){
            if(arr[j]<arr[j-1]){
                swap(arr,j,j-1)

            }

        }
    }

}
function swap(arr,i,j){
    var current=arr[i];
    arr[i]=arr[j]
    arr[j]=current
}

var arr=[7,6,9,4,0,5]
insertSort(arr)
console.log(arr)