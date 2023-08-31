import { styled } from "@/styles";

export const Container = styled("section", {
  marginTop: 20,
  padding: "0 1rem",

  "@lg": {
    padding: "1.15rem 3rem",
  },
});

export const Title = styled("h2", {
  color: "$BLACK",
  fontSize: "2.25rem",
  fontWeight: 700,
  padding: "20px 0",

  "@md": {
    padding: "1.25rem 0",
  },
});
