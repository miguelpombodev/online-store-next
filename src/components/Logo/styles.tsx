import { styled } from "@/styles";

export const Container = styled("a");

export const Title = styled("h1", {
  fontSize: "1.875rem",

  "@md": {
    fontSize: "2.25rem",
    marginTop: "0.25rem",
  },
});
