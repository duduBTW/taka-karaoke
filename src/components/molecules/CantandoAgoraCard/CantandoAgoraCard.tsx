import React, { FC } from "react";

// styles
import Section from "components/atoms/Section";
import {
  CantandoAgoraCardContainer,
  CardControls,
  CardImage,
  CardTitle,
} from "./CantandoAgoraCard.styles";

const CantandoAgoraCard: FC = () => {
  return (
    <Section>
      <CantandoAgoraCardContainer>
        <CardImage src="https://pbs.twimg.com/media/FCUXwK3VIAQWmEi?format=jpg&name=medium" />
        <CardControls>.</CardControls>
        <CardTitle>Lorem ipsum dolor sit.</CardTitle>
      </CantandoAgoraCardContainer>
    </Section>
  );
};

export default CantandoAgoraCard;
