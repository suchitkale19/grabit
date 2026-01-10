import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div className="flex gap-1 items-center">
      <button
        className="border w-6 h-6 text-center border-zinc-800 rounded-lg"
        onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        -
      </button>

      <h1 className="w-12 flex items-center justify-center border border-zinc-800 h-8 rounded-xl">
        {count}
      </h1>
      <button
        className="border w-6 h-6 text-center border-zinc-800 rounded-lg"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
