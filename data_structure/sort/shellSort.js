function shellSort(arr,gap){
    while(gap) {
        for (var i = 0; i < arr.length; i++) {
            for (var j = i; j >gap-1; j-=gap) {
                if (arr[j] <arr[j-gap]) {
                    swap(arr, j-gap, j)
                }
            }
        }
       gap=Math.floor(gap/2)
    }


}
function swap(arr,i,j){
    var current=arr[i];
    arr[i]=arr[j]
    arr[j]=current
}

var arr=[7,6,9,4,0,5]
shellSort(arr,5)
console.log(arr)