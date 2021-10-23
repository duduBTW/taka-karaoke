import Text from "components/atoms/Text";
import MusicasGrid from "components/molecules/MusicasGrid";
import React, { FC } from "react";
import { useMusicas } from "../Providers/MusicasProvider/MusicasProvider";

// styles
import { ProximaContainer } from "./Proxima.styles";

const Proxima: FC = () => {
  const { proximo } = useMusicas();

  if (!proximo) return <></>;

  return (
    <ProximaContainer>
      <Text variant="h2">Próximas</Text>
      <MusicasGrid musicas={proximo} />
    </ProximaContainer>
  );
};

export default Proxima;
