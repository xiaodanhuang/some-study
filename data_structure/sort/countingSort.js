function countingSort(arr,max){
    var bucket=new Array(max+1)//其实这个max 有没有都无所谓，毕竟js
    for(var i=0;i<arr.length;i++){
        if(!bucket[arr[i]]){
            bucket[arr[i]]=0
        }
        bucket[arr[i]]++
    }
    var sortedIndex=0;
    for(var j=0;j<bucket.length;j++){
        while(bucket[j]){
            arr[sortedIndex++]=j
            bucket[j]--
        }

    }


}
function max(arr) {
    var max=0
   for(var i=0;i<arr.length;i++){

       max=max<arr[i]?arr[i]:max
   }
   return max
}
var arr=[2,1,7,8,3,6,9]
countingSort(arr, max(arr))
console.log(arr)