import React from "react";
import { atom, useRecoilState } from "recoil";
import { jsx } from "theme-ui";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

import mockEditorState from "./mockEditorState";

const editorState = atom({
  key: "editorState",
  default: mockEditorState,
});

function Ruminate() {
  const [markdownInput, setMarkdownInput] = useRecoilState(editorState);

  return (
    <div>
      <header>Ruminate</header>
      <main>
        <div>Markdown Editor</div>
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
