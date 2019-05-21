function lsdRadixSort(arr,max){
    var num=0,sortIndex=0;
    while(Math.floor(max/10)){
        num++
        max/=10
    }
    while(sortIndex<=num){
        arr=bucket(arr,sortIndex)
        console.log(arr)
        sortIndex++
    }

}
function bucket(arr,num){
    var bucket=[];
    for(var i=0;i<10;i++){
        bucket[i]=[]
    }
    arr.map(item=>{

        bucket[Math.floor(item/Math.pow(10,num))%10].push(item);
    })
    arr=[];
    bucket.map(item=>{
        arr=arr.concat(item)
    })

    return  arr

}
function max(arr) {
    var max=0
    for(var i=0;i<arr.length;i++){

        max=max<arr[i]?arr[i]:max
    }
    return max
}

var arr=[170,45,75,90,802,2,24,66];
lsdRadixSort(arr,max(arr))