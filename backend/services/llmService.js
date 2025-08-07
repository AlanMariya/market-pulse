// services/llmService.js

function fakeLLM(pulseData) {
  const { score, news, ticker } = pulseData;

  let pulse = "neutral";
  if (score > 0.2) pulse = "bullish";
  else if (score < -0.2) pulse = "bearish";

  const explanation = `The momentum score for ${ticker} is ${score}, indicating a ${pulse} trend. Recent headlines (${news.length}) support this assessment with topics ranging from earnings to innovation.`;

  return { pulse, explanation };
}

module.exports = { fakeLLM };

