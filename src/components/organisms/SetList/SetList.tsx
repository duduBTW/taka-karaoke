import React, { FC } from "react";
import { useMusicas } from "../Providers/MusicasProvider/MusicasProvider";

// components
import MusicasGrid from "components/molecules/MusicasGrid";
import Text from "components/atoms/Text";

// styles
import { SetListContainer } from "./SetListContainer.styles";

const SetList: FC = () => {
  const { setList } = useMusicas();

  if (!setList || setList.length <= 0) return <></>;

  return (
    <SetListContainer>
      <Text variant="h2">Set List</Text>
      <MusicasGrid musicas={setList} />
    </SetListContainer>
  );
};

export default SetList;
