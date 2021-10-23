import React, { FC } from "react";

// components
import Text from "components/atoms/Text";
import CantandoAgoraCard from "components/molecules/CantandoAgoraCard";

// styles
import { CantandoAgoraContainer } from "./CantandoAgora.styles";

const CantandoAgora: FC = () => {
  return (
    <CantandoAgoraContainer>
      <Text variant="h2">Cantando agora</Text>
      <CantandoAgoraCard />
    </CantandoAgoraContainer>
  );
};

export default CantandoAgora;
