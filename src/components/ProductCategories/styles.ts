import { styled } from "@/styles";

export const CategoriesNav = styled("nav", {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-evenly",

  "@md": {
    height: "1.80rem",
    margin: "2rem 0 0",
    justifyContent: "center",
  },
});

export const CategoryItem = styled("a", {
  color: "GRAY_500",
  fontSize: "1.25rem",
  padding: 4,

  "@md": {
    cursor: "pointer",
    marginRight: 50,

    "&:hover": {
      borderBottom: "1px solid $BLACK",
    },
  },
});
