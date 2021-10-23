import Text from "components/atoms/Text";
import MusicasGrid from "components/molecules/MusicasGrid";
import React, { FC } from "react";

// styles
import { ProximaContainer } from "./Proxima.styles";

const PLACEHOLDER_LIST = [
  "https://pbs.twimg.com/media/E-Go9qxUcAU1piM?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/E8emVXCUcAU-2BZ?format=jpg&name=large",
  "https://pbs.twimg.com/media/E7nTCnOVkAg6t6u?format=jpg&name=large",
  "https://pbs.twimg.com/media/E4nNRfqUcAcbfm3?format=jpg&name=large",
  "https://pbs.twimg.com/media/E-0aPxGVUAEaWKf?format=jpg&name=4096x4096",
];

const Proxima: FC = () => {
  return (
    <ProximaContainer>
      <Text variant="h2">Próximas</Text>
      <MusicasGrid musicas={PLACEHOLDER_LIST} />
    </ProximaContainer>
  );
};

export default Proxima;
