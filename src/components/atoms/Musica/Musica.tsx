import React, { FC, useEffect, useState } from "react";
import axios from "axios";

// styles
import {
  MusicaContainer,
  MusicaImage,
  MusicaLabel,
  MusicaExcluir,
} from "./Musica.styles";
import { useMusicas } from "components/organisms/Providers/MusicasProvider/MusicasProvider";
import { IMusica } from "types/musica";

interface Props {
  musica: IMusica;
}

const Musica: FC<Props> = ({ musica }) => {
  const { id, titulo, thumbnail } = musica;

  const { setMusicaAtiva, deleteMusica } = useMusicas();
  const [sdefImage, setDefImage] = useState(false);
  const [sExcluir, setSExcluir] = useState(false);

  useEffect(() => {
    axios
      .get(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`)
      .then((data) => {
        console.log(`data.status`, data.status);
        if (data.status !== 200) setDefImage(true);
      })
      .catch((err) => {
        setDefImage(true);
      });
  }, []);

  return (
    <MusicaContainer
      onMouseEnter={() => setSExcluir(true)}
      onMouseLeave={() => setSExcluir(false)}
      onClick={() => setMusicaAtiva(musica)}
    >
      {sExcluir && (
        <MusicaExcluir
          onClick={(e) => {
            e.stopPropagation();

            deleteMusica(musica);
          }}
        >
          Excluir
        </MusicaExcluir>
      )}
      <MusicaImage
        alt={`Imagem ${titulo}`}
        src={
          sdefImage
            ? thumbnail
            : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
        }
      />
      <MusicaLabel>{titulo}</MusicaLabel>
    </MusicaContainer>
  );
};

export default Musica;
