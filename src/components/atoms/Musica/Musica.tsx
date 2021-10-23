import React, { FC } from "react";

// styles
import { MusicaContainer, MusicaImage, MusicaLabel } from "./Musica.styles";

interface Props {
  src: string;
  title: string;
}

const Musica: FC<Props> = ({ src, title }) => {
  return (
    <MusicaContainer>
      <MusicaImage alt={`Imagem ${title}`} src={src} />
      <MusicaLabel>{title}</MusicaLabel>
    </MusicaContainer>
  );
};

export default Musica;
