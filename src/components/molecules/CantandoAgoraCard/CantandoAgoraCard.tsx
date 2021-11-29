import React, { FC, useEffect, useState } from "react";

// styles
import Section from "components/atoms/Section";
import {
  CantandoAgoraCardContainer,
  CardControls,
  CardImage,
  CardTitle,
} from "./CantandoAgoraCard.styles";
import { IMusica } from "types/musica";
import axios from "axios";

interface Props {
  musica: IMusica;
}

const CantandoAgoraCard: FC<Props> = ({ musica }) => {
  const [sdefImage, setDefImage] = useState(false);

  useEffect(() => {
    axios
      .get(`https://img.youtube.com/vi/${musica.id}/maxresdefault.jpg`)
      .then((data) => {
        console.log(`data.status`, data.status);
        if (data.status !== 200) {
          setDefImage(true);
        } else {
          setDefImage(false);
        }
      })
      .catch((err) => {
        setDefImage(true);
      });
  }, [musica]);

  return (
    <Section>
      <CantandoAgoraCardContainer>
        <CardImage
          onClick={() => window.open(musica.url, "_blank")}
          src={
            sdefImage
              ? musica.thumbnail
              : `https://img.youtube.com/vi/${musica.id}/maxresdefault.jpg`
          }
        />
        <CardControls></CardControls>
        <CardTitle>{musica.titulo.substring(0, 22)}</CardTitle>
      </CantandoAgoraCardContainer>
    </Section>
  );
};

export default CantandoAgoraCard;
