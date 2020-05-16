import React from "react";
import { useRecoilState } from "recoil";
import { jsx } from "theme-ui";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

function Ruminate() {
  const [markdownInput, setMarkdownInput] = useRecoilState("");

  return (
    <div className="Ruminate">
      <header className="Ruminate-header">Ruminate</header>
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

export default Ruminate;
