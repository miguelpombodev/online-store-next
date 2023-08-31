import { styled } from "@/styles";

export const Container = styled("div", {
  display: "none",

  "@md": {
    display: "flex",
    justifyContent: "space-evenly",
    width: "20%",

    " & > div": {
      cursor: "pointer",
    },

    " & > svg": {
      cursor: "pointer",
    },
  },
});

export const UserContainerIcon = styled("a", {
  display: "flex",
  alignItems: "center",
});

export const UserNameGreeting = styled("p", {
  fontSize: "1.1rem",
  margin: "0 10px",
});
