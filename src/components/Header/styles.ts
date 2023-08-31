import { styled } from "../../styles";

export const Container = styled("header", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem 0 0",
  marginBottom: 10,

  backgroundColor: "$WHITE",
});

export const MainContentContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "1.5rem 0",

  "@md": {
    padding: "0 1rem",
    flexDirection: "row",
  },

  "@xl": {
    padding: "0 13rem",
    flexDirection: "row",
  },
});

export const CategoriesContainer = styled("div");
