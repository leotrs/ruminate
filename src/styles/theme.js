import { funk } from "@theme-ui/presets";
import { merge } from "theme-ui";

const styles = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen"',
};

const theme = merge(funk, {
  fonts: {
    body: styles.fontFamily,
    heading: styles.fontFamily,
    monospace:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New",monospace',
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#609",
    secondary: "#306",
    muted: "#f6f6f6",

    modes: {
      dark: {
        background: "#2b2b2b",
        text: "#f9edff",
        muted: "#191919",
        primary: "#3cf",
        secondary: "#e0f",
      },
    },
  },
  styles: {
    root: {
      // Stop the page from shifting due to the presence/absence of a vertical scrollbar.
      marginLeft: "calc(100vw - 100%)",
      "& *": {
        WebkitTapHighlightColor: "transparent",
      },
      ".js-focus-visible & :focus:not(.focus-visible)": {
        outline: "none",
      },
    },
  },
  text: {
    title: {
      textDecoration: "underline",
    },
  },
  useColorSchemeMediaQuery: true,
});

export default theme;
