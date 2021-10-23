import React from "react";

// styles
import Section from "components/atoms/Section";
import {
  PedirMusicaContainer,
  PedirMusicaContent,
  PedirMusicaIcon,
} from "./PedirMusica.styles";

const PedirMusica = () => {
  return (
    <Section>
      <PedirMusicaContainer>
        <PedirMusicaContent>PEDIR MÚSICA</PedirMusicaContent>
        <PedirMusicaIcon src="/pedir.png" />
      </PedirMusicaContainer>
    </Section>
  );
};

export default PedirMusica;
