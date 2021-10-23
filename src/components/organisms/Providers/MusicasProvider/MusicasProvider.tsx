import { createContext, FC, useContext } from "react";
import { useMusicasProvider } from "hooks/useMusicas";

// types
import { IUseMusica } from "types/musica";

export const MusicasContext = createContext<IUseMusica | null>(null);
export const useMusicas = () => {
  const state = useContext(MusicasContext);

  if (!state) {
    throw new Error(
      "The component should be inside or wrMusicased by the `MusicasProvider` (colocar o componente dentro do MusicasProvider)"
    );
  }

  return state;
};

export const MusicasProvider: FC = ({ children }) => {
  const value = useMusicasProvider();

  return (
    <MusicasContext.Provider value={value}>{children}</MusicasContext.Provider>
  );
};
