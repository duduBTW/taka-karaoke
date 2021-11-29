import axios from "axios";
import { useMemo, useState } from "react";
import { IMusica, IUseMusica } from "types/musica";
import { useFetch } from "./useFetch";

export const useMusicasProvider = (): IUseMusica => {
  const { data: musicas, mutate } = useFetch<IMusica[]>("/api/musicas");
  const [musicaAtiva, setMusicaAtiva] = useState<IMusica | null>(null);
  const _setMusicaAtiva = (musica: IMusica) => {
    if (musicaAtiva && musicas) {
      axios.put("/api/musicas", {
        id: musica.id,
      });

      mutate(
        musicas.map((m) =>
          m.id === musicaAtiva.id ? { ...m, jaCantado: true } : m
        ),
        false
      );
    }

    setMusicaAtiva(musica);
  };

  const deleteMusica = (musica: IMusica) => {
    if (musicas && musica._id) {
      axios.delete(`/api/musicas?id=${musica._id}`);

      mutate(
        musicas.filter((m) => m._id !== musica._id),
        false
      );
    } else {
      console.error("`_id` não encontrado");
    }
  };

  const setList = useMemo(
    () => musicas?.filter((musica) => musica.jaCantado),
    [musicas]
  );

  const proximo = useMemo(
    () => musicas?.filter((musica) => !musica.jaCantado),
    [musicas]
  );

  return {
    musicas,
    setList,
    proximo,

    setMusicaAtiva: _setMusicaAtiva,
    musicaAtiva,
    deleteMusica,
  };
};
