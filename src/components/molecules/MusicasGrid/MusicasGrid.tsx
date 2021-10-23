import React, { FC } from "react";

// styles
import Section from "components/atoms/Section";
import { MusicasGridContainer } from "./MusicasGrid.styles";
import Musica from "components/atoms/Musica";

interface Props {
  musicas: string[];
}

const MusicasGrid: FC<Props> = ({ musicas }) => {
  return (
    <Section>
      <MusicasGridContainer>
        {musicas.map((item) => (
          <Musica key={item} title="Nome da música" src={item} />
        ))}
      </MusicasGridContainer>
    </Section>
  );
};

export default MusicasGrid;
