import React from "react";
import Root from "./Root";
import Ruminate from "./Ruminate ";

import "./App.css";

function App(props) {
  return (
    <Root>
      <Ruminate {...props} />
    </Root>
  );
}

export default App;
