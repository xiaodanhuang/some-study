function bucketSort(arr){
    var min=arr[0],max=arr[0];
    for(i=0;i<arr.length;i++){
        min=min>arr[i]?arr[i]:min;
        max=max<arr[i]?arr[i]:max
    }
    var bucketSize=5;
    var bucketCount=Math.floor((max-min)/bucketSize)+1
    var bucket=new Array(bucketCount);
    for( var j=0;j<arr.length;j++){
        bucket[j]=[]
    }

    arr.map(item=>{
        bucket[Math.floor((item - min) / bucketSize)].push(item);
    })
    arr=[]
    bucket.map(item=>{
        item.sort()
        arr=arr.concat(item)
    })
    return arr
}
var arr=[7,6,9,4,0,5]

console.log(bucketSort(arr))