import React, { useState } from "react";

import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

import "./App.css";

function App() {
  const [markdownInput, setMarkdownInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">Ruminate</header>
      <main>
        <div>Test</div>
        <textarea
          onChange={(event) => {
            setMarkdownInput(event.target.value);
          }}
          value={markdownInput}
        />
        <MathpixLoader>
          <MathpixMarkdown text={markdownInput} />
        </MathpixLoader>
      </main>
    </div>
  );
}

export default App;
