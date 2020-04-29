import React, { useState } from "react";
import "./App.css";

function App() {
  const [markdownInput, setMarkdownInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">Ruminate</header>
      <main>
        <div>Test</div>
        <input
          onChange={(event) => {
            setMarkdownInput(event.target.value);
          }}
        />
        <div>{markdownInput}</div>
      </main>
    </div>
  );
}

export default App;
