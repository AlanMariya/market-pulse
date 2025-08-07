# 📈 Market-Pulse

A microservice to answer:

> “Is TICKER looking bullish, bearish, or neutral for tomorrow — and why?”

---

## 🧠 What It Does

For any given stock ticker (e.g. `AAPL`, `MSFT`, `NVDA`), this app:
- Pulls last 5 trading-day prices (mocked)
- Calculates a simple momentum score
- (Mock) fetches 5 latest news headlines
- Generates a "pulse": bullish / bearish / neutral
- Gives a short LLM-like explanation
- Returns a JSON response via REST API

---

## 🖼️ Frontend Preview

<img src="[./screenshots/ui-preview.png](https://github.com/AlanMariya/market-pulse/blob/main/Frontend%20Preview%202.png)" alt="Market Pulse UI" width="600"/>
<img src="https://github.com/AlanMariya/market-pulse/blob/main/Frontend%20preview%201.png" >

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Backend | Node.js (Express) |
| Frontend | React |
| Charting | Recharts (Sparkline) |
| Styling | Basic CSS |
| API Integration | (Mocked Alpha Vantage, NewsAPI, Gemini) |

---

## 🚀 Getting Started

### 🔧 1. Clone the Repo

```bash
git clonehttps://github.com/AlanMariya/market-pulse.git
cd market-pulse

2.Setup Backend
cd backend
npm install
created a .env  file and connected to the API key
nodemon index.js

3.Setup Frontend
cd frontend
npm install
npm start
Run on: http://localhost:3000

Sample API Call 
curl "http://localhost:5000/api/v1/market-pulse?ticker=MSFT"

Sample JSON Response :
{
  "ticker": "AAPL",
  "as_of": "2025-08-07",
  "momentum": {
    "returns": [
      -0.03,
      0,
      0,
      0.05
    ],
    "score": 0.01
  },
  "news": [
    {
      "title": "AAPL hits new high amid AI boom",
      "description": "AAPL stock continues its climb as analysts praise its AI innovations.",
      "url": "#"
    },
    {
      "title": "AAPL quarterly earnings exceed expectations",
      "description": "Strong revenue growth and product launches are fueling investor confidence.",
      "url": "#"
    },
    {
      "title": "Tech stocks rise, led by AAPL",
      "description": "AAPL leads the tech rally as markets react positively to global cues.",
      "url": "#"
    },
    {
      "title": "AAPL announces new sustainability initiative",
      "description": "The company is investing in green tech, drawing praise from environmental groups.",
      "url": "#"
    },
    {
      "title": "Wall Street bullish on AAPL",
      "description": "Several top firms have issued buy ratings on AAPL for the coming quarter.",
      "url": "#"
    }
  ],
  "pulse": "neutral",
  "llm_explanation": "The momentum score for AAPL is 0.01, indicating a neutral trend. Recent headlines (5) support this assessment with topics ranging from earnings to innovation."
}
Features
✅ REST API with ticker input

✅ Price momentum (mock or real)

✅ News headlines (mock or real)

✅ LLM-generated explanation (mocked)

✅ React frontend with chat UI + sparkline + JSON viewer

Design Trade-offs
Used mocked data instead of real APIs to skip authentication delays.

Used Gemini-style static responses for LLM reasoning due to key constraints.

Focused on core logic, minimal design polish.


Next Steps (if more time)
 Add real API integration (Alpha Vantage, NewsAPI, Gemini)

 Add loading spinners / error UI

 Add unit tests for momentum and response generation

 Add CI/CD via GitHub Actions

 Deploy to Render / Vercel / Railway

 
