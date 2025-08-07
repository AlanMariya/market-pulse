// src/components/JSONToggle.js
import React, { useState } from "react";

export default function JSONToggle({ jsonData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "🔽 Hide Raw JSON" : "🔼 Show Raw JSON"}
      </button>
      {expanded && (
        <pre
          style={{
            background: "#f0f0f0",
            padding: 15,
            marginTop: 10,
            borderRadius: 5,
            overflowX: "auto"
          }}
        >
          {JSON.stringify(jsonData, null, 2)}
        </pre>
      )}
    </div>
  );
}
