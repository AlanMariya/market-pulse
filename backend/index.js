// index.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { getLast5DayCloses } = require("./services/priceService");
const { calculateMomentum } = require("./utils/momentum");
const { getMockNews } = require("./services/newsService");
const { fakeLLM } = require("./services/llmService");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ message: "Market Pulse API is working!" });
});

app.get("/api/v1/market-pulse", async (req, res) => {
  const ticker = req.query.ticker;
  if (!ticker) return res.status(400).json({ error: "Missing ticker" });

  try {
    const prices = await getLast5DayCloses(ticker);
    const { returns, score } = calculateMomentum(prices);
    const news = await getMockNews(ticker);
    const { pulse, explanation } = fakeLLM({ score, news, ticker });

    res.json({
      ticker,
      as_of: new Date().toISOString().split("T")[0],
      momentum: { returns, score },
      news,
      pulse,
      llm_explanation: explanation
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
