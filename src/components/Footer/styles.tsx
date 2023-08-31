import { styled } from "@/styles";

export const Container = styled("footer", {
  backgroundColor: "$WHITE",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 40,
});

export const FooterOptions = styled("section", {
  alignItems: "start",
  display: "flex",
  justifyContent: "space-evenly",
});

export const FooterItemsContainer = styled("ul", {
  listStyle: "none",
});

export const FooterItemsTitle = styled("h2");

export const FooterItems = styled("p", {
  fontSize: "1.15rem",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const PaymentsOptions = styled("section", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginTop: 30,
});

export const PaymentsImage = styled("img", {
  display: "none",

  "@md": {
    height: 35,
    marginRight: 20,
    width: 50,
  },
});
