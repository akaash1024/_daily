import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (!isStart) return;

    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStart]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setIsStart(true)}>
        START
      </button>

      <button onClick={() => setIsStart(false)}>
        PAUSE
      </button>

      <button onClick={() => setCount(0)}>
        RESET
      </button>
    </>
  );
}

export default App;