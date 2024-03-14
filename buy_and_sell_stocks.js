// prices = [7,1,3,4,5,6,2]
// Find the first low and next max number

var maxProfit = function (prices) {

currentMin = prices[0];
currentMax = 0;
for (let i = 0; i < prices.length; i++) {
    currentMin = Math.min(currentMin, prices[i])
    currentMax = Math.max(currentMax, prices[i] - currentMin)
}
return [currentMax, currentMin]
}

console.log(maxProfit([7,1,3,4,5,6,2]))
