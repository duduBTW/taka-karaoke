import styled from "@emotion/styled";

interface Props {
  variant: "h1" | "h2";
}

export const TextContent = styled.div<Props>`
  grid-column: 4 / -2;
  letter-spacing: 0.1em;

  color: ${({ variant }) => {
    switch (variant) {
      case "h1":
        return "#d8d8d8";
      case "h2":
        return "#757575";

      default:
        return "#000000";
    }
  }};

  font-weight: ${({ variant }) => {
    switch (variant) {
      case "h1":
        return "900";
      case "h2":
        return "bold";

      default:
        return "normal";
    }
  }};

  font-size: ${({ variant }) => {
    switch (variant) {
      case "h1":
        return "40px";
      case "h2":
        return "24px";

      default:
        return "1rem";
    }
  }};

  line-height: ${({ variant }) => {
    switch (variant) {
      case "h1":
        return "58px";
      case "h2":
        return "36px";

      default:
        return "120%";
    }
  }};
`;
