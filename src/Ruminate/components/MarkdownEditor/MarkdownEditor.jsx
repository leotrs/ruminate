/** @jsx jsx */
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { jsx } from "theme-ui";

import * as state from "../../state";
import mockText from "../../../mocks/defaultMarkdown.txt";

function MarkdownEditor(props) {
  const [editorText, setEditorText] = useRecoilState(state.editorText);

  useEffect(() => {
    const loadDefaultText = async () => {
      const response = await fetch(mockText);
      const text = await response.text();
      setEditorText(text);
    };

    loadDefaultText();
  }, []); // eslint-disable-line

  return (
    <section
      {...props}
      sx={{
        width: ["90%", "45%"],
      }}
    >
      <textarea
        onChange={(event) => {
          setEditorText(event.target.value);
        }}
        value={editorText}
        sx={{
          minHeight: "100%",
          width: "100%",
          padding: 2,
        }}
      />
    </section>
  );
}

export default MarkdownEditor;
