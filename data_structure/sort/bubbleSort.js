function bubbleSort(arr){
   for(var j=0;j<arr.length-1;j++){
       for(var i=0;i<arr.length-1-j;i++){
           if(arr[i]>arr[i+1]){
               swap(arr,i,i+1)
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
bubbleSort(arr)