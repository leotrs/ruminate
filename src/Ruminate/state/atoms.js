import { atom } from "recoil";

const editorText = atom({
  key: "ruminate/editorText",
  default: "",
});

export { editorText };
