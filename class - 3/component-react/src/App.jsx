import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component rendered");

    // Clean up function
    return () => {
      console.log("Component unmounted");
    };

    // Only run effect if count changes
  }, [count]);

  const increment = () => {
    // count++; //(count = count + 1 | count += 1)
    setCount(count + 1);
    // console.log("Count incremented", count);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
