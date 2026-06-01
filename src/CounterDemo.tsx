import { useState } from "react";
import { useCounter } from "./hooks/useCounter";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);
  return (
    <div style={{ padding: "2rem", fontSize: "1rem" }}>
      <h1>useCounter Demo</h1>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1 style={{color:"red"}}>Ticks: {count}</h1>
    </div>
  );
}
