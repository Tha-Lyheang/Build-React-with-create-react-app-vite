import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  function normalUpdateCount() {
    setCount((prev) => prev + 1);
    inputRef.current.focus();
  }

  function normalDeductCount() {
    setCount((prev) => prev - 1);
  }

  function checkRef() {
    console.log(inputRef.current.value);
  }

  return (
    <div id="center">
      <p>You clicked {count} times</p>
      <button onClick={normalUpdateCount}>Click me</button>
      <button onClick={normalDeductCount}>Deduct</button>
      <input ref={inputRef} />
      <button onClick={checkRef}>Check Ref</button>
    </div>
  );
}

export default App;
