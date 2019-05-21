function orderedSearch(arr,num){
    for(var i=0;i<arr.length;i++){
        if(num==arr[i]){
            return true
        }
    }

    return false
}

var arr=[7,6,9,4,0,5]
console.log(orderedSearch(arr,9))
console.log(orderedSearch(arr,-1))