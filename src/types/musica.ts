export interface IMusica {
  titulo: string;
  id: string;
  thumbnail: string;
  url: string;
  dateRequest: Date;
  jaCantado: boolean;
}

export interface IUseMusica {
  musicas: IMusica[] | undefined;
  setList: IMusica[] | undefined;
  proximo: IMusica[] | undefined;

  setMusicaAtiva: (musica: IMusica) => void;
  musicaAtiva: IMusica | null;
}
