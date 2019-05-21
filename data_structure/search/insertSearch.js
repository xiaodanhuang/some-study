function insertSearch(arr,item){
    var low=0,high=arr.length-1;
    while(low<=high){
        var mid= low+Math.floor((item-arr[low])/(arr[high]-arr[low])*(high-low))
        if(arr[mid]==item){
            return mid
        }else if(item<arr[mid]){
            high=mid-1
        }else{
            low=mid+1
        }
    }
    return -1
}
