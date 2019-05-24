//70 爬楼梯
var climbStairs = function(n) {
    if(n==1){
        return 1
    }
    if(n==2){
        return 2
    }
    let nums=0;
    let n1=1;
    let n2=2;
    for(i=3;i<=n;i++){
        nums=n1+n2;
        n1=n2;
        n2=nums
    }
    return nums
};
console.log(climbStairs(7))