import { styled } from "@/styles";

export const Container = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > .swiper > .swiper-wrapper > .swiper-slide": {
    position: "relative",
  },
});

export const SwiperNavButtons = styled("div", {
  display: "none",

  "@lg": {
    display: "block",
  },
});

export const SwiperButton = styled("button", {
  alignItems: "center",
  backgroundColor: "$DEFAULT_ORANGE",
  borderRadius: "100%",
  border: "none",
  color: "$WHITE",
  cursor: "pointer",
  display: "flex",
  height: "50px",
  justifyContent: "center",
  width: "50px",
  zIndex: 1,
});
