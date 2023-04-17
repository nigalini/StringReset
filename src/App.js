import React from "react";
import { useState } from "react";
export default function myApp() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed:{text}</p>
      <button onClick={() => setText("")}>Reset</button>
    </>
  );
}
