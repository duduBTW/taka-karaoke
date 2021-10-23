import React, { FC } from "react";
import { useMusicas } from "../Providers/MusicasProvider/MusicasProvider";

// components
import Text from "components/atoms/Text";
import CantandoAgoraCard from "components/molecules/CantandoAgoraCard";

// styles
import { CantandoAgoraContainer } from "./CantandoAgora.styles";

const CantandoAgora: FC = () => {
  const { musicaAtiva } = useMusicas();

  if (!musicaAtiva) return <></>;

  return (
    <CantandoAgoraContainer>
      <Text variant="h2">Cantando agora</Text>
      <CantandoAgoraCard musica={musicaAtiva} />
    </CantandoAgoraContainer>
  );
};

export default CantandoAgora;
