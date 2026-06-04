import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleMinus = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const handleReset = () => {
    const newCount = 0;
    setCount(newCount);
  };
  const counterStyle = {
    border: "2px solid yellow",
    width: "200px",
    height: "100px",
  };
  return (
    <div style={counterStyle}>
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleMinus}>Minus</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
