import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "$teko",
  },

  main: {
    backgroundColor: "$GRAY_100",
  },
  a: {
    textDecoration: "none",
    color: "#000",
  },
});
