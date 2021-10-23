import React, { FC } from "react";
import { IMusica } from "types/musica";

// styles
import Section from "components/atoms/Section";
import { MusicasGridContainer } from "./MusicasGrid.styles";
import Musica from "components/atoms/Musica";

interface Props {
  musicas: IMusica[];
}

const MusicasGrid: FC<Props> = ({ musicas }) => {
  return (
    <Section>
      <MusicasGridContainer>
        {musicas.map((item) => (
          <Musica key={item.id} musica={item} />
        ))}
      </MusicasGridContainer>
    </Section>
  );
};

export default MusicasGrid;
