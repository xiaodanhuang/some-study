//122 买卖股票的最佳时机 II

var maxProfit = function (prices) {
    let profit = 0;
    for(let i=0;i+1<prices.length;i++){
        if(prices[i+1]>=prices[i]){
            profit+=prices[i+1]-prices[i]
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))