//121 买卖股票的最佳时机
var maxProfit = function (prices) {
    let profit = 0;
    prices.forEach((item, index) => {
        let nums = prices.slice(index).filter(num =>
            num > item
        )
        if (nums.length) {
            let current = Math.max(...nums)- item
            profit = current > profit ? current : profit
        }

    })
    return profit
};

console.log(maxProfit([1,2,4,7,11]))