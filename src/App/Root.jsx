import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "theme-ui";

import theme from "../styles/theme";

const Root = ({ children }) => {
  return (
    <div className="root">
      <RecoilRoot>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </RecoilRoot>
    </div>
  );
};

export default Root;
