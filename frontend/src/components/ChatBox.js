// src/components/ChatBox.js
import React, { useState } from "react";
import Sparkline from "./Sparkline"; // Optional if you added it
import "./ChatBox.css"; // optional styling
import JSONToggle from "./JSONToggle";

export default function ChatBox() {
  const [ticker, setTicker] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMarketPulse = async () => {
    if (!ticker) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`http://localhost:5000/api/v1/market-pulse?ticker=${ticker}`);
      const data = await res.json();

      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Server unreachable");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMarketPulse();
  };

  return (
    <div className="chat-container">
      <h2>💬 Market Pulse</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter stock ticker (e.g., AAPL)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <button type="submit">Check</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <p><strong>Pulse:</strong> {result.pulse}</p>
          <p><strong>Explanation:</strong> {result.llm_explanation}</p>

          {/* Optional sparkline */}
          {result?.momentum?.returns && <Sparkline data={result.momentum.returns} />}

          {/* Collapsible JSON */}
          <details>
            <summary>Show Full JSON</summary>
            <div className="json-wrapper">
                <JSONToggle jsonData={result} />
            </div>
          </details>
        </div>
      )}
    </div>
  );
}
