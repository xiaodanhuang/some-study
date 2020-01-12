function insertSort(arr){
    for(var i=1;i<arr.length;i++){
        for(var j=i+bars;j<arr.length;j+=bars){
            if(arr[j+bars]<arr[j]){
                swap(arr,j,j+bars)

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