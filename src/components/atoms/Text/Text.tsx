import React, { FC } from "react";

// styles
import Section from "../Section";
import { TextContent } from "./Text.styles";

interface Props {
  variant: "h1" | "h2";
}

const Text: FC<Props> = ({ children, variant }) => {
  return (
    <Section>
      <TextContent variant={variant}>{children}</TextContent>
    </Section>
  );
};

export default Text;
