import { createStitches } from "@stitches/react";
import { Teko } from "next/font/google";

const tekoFont = Teko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-teko",
});

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      WHITE: "#FFFFFF",
      BLACK: "#000000",

      DEFAULT_BLUE: "#3B81FC",
      DEFAULT_YELLOW: "#FCDF3B",
      DEFAULT_ORANGE: "#FF5703",

      GREEN_700: "#00875F",
      GREEN_500: "#00B37E",

      GRAY_700: "#121214",
      GRAY_600: "#202024",
      GRAY_500: "#29292E",
      GRAY_400: "#323238",
      GRAY_300: "#7C7C8A",
      GRAY_200: "#C4C4CC",
      GRAY_100: "#E1E1E6",

      RED: "#F75A68",
      RED_DARK: "#AA2834",
    },
    fonts: {
      teko: `${tekoFont.style.fontFamily}, sans-serif`,
    },
    fontSizes: {
      SM: 14,
      MD: 16,
      LG: 18,
      XL: 24,
      XXL: 28,
    },
  },

  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1440px)",
  },
});
