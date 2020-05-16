import React from "react";
import { atom, useRecoilState } from "recoil";
import { jsx } from "theme-ui";

import mockEditorState from "./mockEditorState";

const markdownEditorState = atom({
  key: "ruminate/markdownEditorState",
  default: mockEditorState,
});

function MarkdownEditor() {
  const [markdownInput, setMarkdownInput] = useRecoilState(markdownEditorState);

  return (
    <div>
      <div>Markdown Editor</div>
      <textarea
        onChange={(event) => {
          setMarkdownInput(event.target.value);
        }}
        value={markdownInput}
      />
    </div>
  );
}

export { MarkdownEditor as default, markdownEditorState };
