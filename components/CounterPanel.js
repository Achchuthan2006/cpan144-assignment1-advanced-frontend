"use client";

import { useState } from "react";

export default function CounterPanel({ initialCount, step }) {
  const [count, setCount] = useState(initialCount);

  return (
    <section className="card">
      <h3>Quick Counter</h3>
      <p>
        Count: <strong>{count}</strong>
      </p>
      <div className="button-row">
        <button onClick={() => setCount((value) => value + step)}>Increase</button>
        <button onClick={() => setCount((value) => value - step)}>Decrease</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
      {/* Conditional rendering displays feedback based on current state */}
      <p className="status">
        {count > initialCount
          ? "Great, you moved above the starting value."
          : count < initialCount
            ? "You are below the starting value."
            : "You are exactly at the starting value."}
      </p>
    </section>
  );
}
