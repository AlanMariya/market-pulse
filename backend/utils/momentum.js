// utils/momentum.js

function calculateMomentum(prices) {
  if (!prices || prices.length < 2) {
    throw new Error("Not enough price data to calculate momentum.");
  }

  // Calculate daily returns
  const returns = [];
  for (let i = 0; i < prices.length - 1; i++) {
    const dailyReturn = (prices[i + 1] - prices[i]) / prices[i];
    returns.push(parseFloat(dailyReturn.toFixed(2)));
  }

  // Momentum score = average of returns
  const score =
    parseFloat((returns.reduce((a, b) => a + b, 0) / returns.length).toFixed(2));

  return { returns, score };
}

module.exports = { calculateMomentum };
