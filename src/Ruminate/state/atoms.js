import { atom } from "recoil";

import mockEditorState from "../mockEditorState";

const markdownEditorState = atom({
  key: "ruminate/markdownEditorState",
  default: mockEditorState,
});

export { markdownEditorState };
