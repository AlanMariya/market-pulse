// services/priceService.js

const axios = require("axios");

const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;

async function getLast5DayCloses(ticker) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${API_KEY}`;

  const response = await axios.get(url);
  const data = response.data;

  if (!data["Time Series (Daily)"]) {
    throw new Error(
      `Invalid response from Alpha Vantage: ${JSON.stringify(data)}`
    );
  }

  const timeSeries = data["Time Series (Daily)"];
  const sortedDates = Object.keys(timeSeries).sort((a, b) => new Date(b) - new Date(a));
  const closes = sortedDates.slice(0, 5).map(date => parseFloat(timeSeries[date]["4. close"]));

  return closes.reverse(); // Oldest to newest
}

module.exports = { getLast5DayCloses };
