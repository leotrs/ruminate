/** @jsx jsx */
import { useRecoilValue } from "recoil";
import { jsx } from "theme-ui";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

import * as state from "../../state";

function FormattedResults(props) {
  const editorText = useRecoilValue(state.editorText);

  return (
    <section
      {...props}
      sx={{
        border: (theme) => `1px solid ${theme.colors.text}`,
        height: "auto",
        minWidth: ["90%", "45%"],
      }}
    >
      <MathpixLoader>
        <MathpixMarkdown text={editorText} />
      </MathpixLoader>
    </section>
  );
}

export default FormattedResults;
