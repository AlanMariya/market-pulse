// src/components/Sparkline.js
import { LineChart, Line, XAxis, Tooltip } from "recharts";

export default function Sparkline({ data }) {
  const formattedData = data.map((value, i) => ({ day: `D${i + 1}`, return: value }));

  return (
    <div style={{ marginTop: 20 }}>
      <h4>5-Day Return Sparkline</h4>
      <LineChart width={250} height={100} data={formattedData}>
        <XAxis dataKey="day" />
        <Tooltip />
        <Line type="monotone" dataKey="return" stroke="#1976d2" strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  );
}
