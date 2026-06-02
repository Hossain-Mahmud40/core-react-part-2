import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const handleSingle = () => {
    setRuns(runs + 1);
  };
  const handleFour = () => {
    setRuns(runs + 4);
  };
  const handleSix = () => {
    setRuns(runs + 6);
  };
  return (
    <div>
      <h2>Player: Bangla Batsman</h2>
      {runs > 50 && <p>You scored more than 50 runs!</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
