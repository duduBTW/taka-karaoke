import React, { FC } from "react";

// components
import MusicasGrid from "components/molecules/MusicasGrid";
import Text from "components/atoms/Text";

// styles
import { SetListContainer } from "./SetListContainer.styles";

const SetList: FC = () => {
  return (
    <SetListContainer>
      <Text variant="h2">Set List</Text>
      <MusicasGrid
        musicas={[
          "https://pbs.twimg.com/media/FAUNz96VkAQz5jg?format=jpg&name=4096x4096",
          "https://pbs.twimg.com/media/FBFv0RxVUAETvLg?format=jpg&name=large",
          "https://pbs.twimg.com/media/E_O7YguUcAMCVmR?format=jpg&name=large",
          "https://pbs.twimg.com/media/E--96ldVEAEvyvG?format=jpg&name=large",
          "https://pbs.twimg.com/media/E-DK4TKUYAsNs95?format=jpg&name=medium",
          "https://pbs.twimg.com/media/E9sesXzVoAYAo_S?format=jpg&name=4096x4096",
        ]}
      />
    </SetListContainer>
  );
};

export default SetList;
