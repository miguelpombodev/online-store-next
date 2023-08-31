import { styled } from "@/styles";

export const Container = styled("a", {
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  width: "14rem",
  overflow: "hidden",
  borderRadius: 8,

  "@xl": {
    width: "20rem",
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});

export const ProductImage = styled("img", {
  objectFit: "cover",
});

export const ProductInfoContainer = styled("footer", {
  position: "absolute",
  bottom: "0.75rem",
  right: 0,
  left: "1.45rem",
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 180,

  backgroundColor: "rgba(255, 87, 3, 0.6)",
  padding: "0.65rem",

  "@lg": {
    width: 280,
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    transform: "translateY(110%)",
  },
});

export const Price = styled("span", {
  color: "$WHITE",
  fontSize: "$XL",
  fontWeight: 700,
});

export const ProductName = styled("strong", {
  color: "$BLACK",
  fontSize: "$SM",
});

export const ProductCategory = styled("p", {
  color: "$GRAY_300",
  fontSize: "$FONT_SIZE.SM",
  marginTop: 10,
});
