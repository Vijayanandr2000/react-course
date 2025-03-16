import React, { useRef } from "react";
function App() {
  const inputRef = useRef(null);
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />

      <h1
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Click me
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default App;
