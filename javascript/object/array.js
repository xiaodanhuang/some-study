/*
    数组去重
*/

//set
let arr=[1,1,2,2,34,5,5]
let arr1=Array.from(new Set(arr))
console.log(arr1)


//for indexOf/includes
let arr2=[]
for(i=0;i<arr.length;i++){
    if(arr2.indexOf(arr[i])==-1){
        arr2.push(arr[i])
    }
}
console.log(arr2)
let arr3= arr.filter(function(item, index, arr) {
    return arr.indexOf(item) === index;
});
console.log(arr3)
//for for splice
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
        }
    }
}
console.log(arr)
