import { styled } from "@/styles";

export const Container = styled("div", {
  width: "90%",
  alignItems: "center",
  backgroundColor: "$GRAY_100",
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-around",
  padding: 8,
  boxShadow: "8px 9px 13px -7px rgba(0,0,0,0.75)",

  "@md": {
    width: "50%",
  },
});

export const Input = styled("input", {
  backgroundColor: "$GRAY_100",

  border: "none",
  borderRight: "1px solid $GRAY_200",
  fontSize: "1rem",
  height: 30,
  outline: "none",
  width: "75%",

  "@md": {
    width: "90%",
  },
});
