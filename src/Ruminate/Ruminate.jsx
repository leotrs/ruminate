/** @jsx jsx */
import { Heading, jsx } from "theme-ui";

import { FormattedResults, MarkdownEditor } from "./components";

function Ruminate() {
  return (
    <div
      sx={{
        margin: 2,
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize: 6,
        }}
        variant="title"
      >
        Ruminate
      </Heading>
      <div
        sx={{
          display: ["block", "flex"],
          justifyContent: [null, "space-between"],
          marginTop: 2,
          height: "85vh",
        }}
      >
        <MarkdownEditor
          sx={{
            marginRight: 2,
          }}
        />
        <FormattedResults
          sx={{
            marginLeft: 2,
          }}
        />
      </div>
    </div>
  );
}

export default Ruminate;
