import React, { FC } from "react";

// components
import Text from "components/atoms/Text";
import Proxima from "components/organisms/Proxima";
import CantandoAgora from "components/organisms/CantandoAgora";
import SetList from "components/organisms/SetList";
import PedirMusica from "components/organisms/PedirMusica";

// styles
import { HomeTemplateConainer } from "./HomeTemplate.styles";

const HomeTemplate: FC = () => {
  return (
    <HomeTemplateConainer>
      <Text variant="h1">Fila</Text>

      <CantandoAgora />
      <Proxima />
      <SetList />

      <PedirMusica />
    </HomeTemplateConainer>
  );
};

export default HomeTemplate;
