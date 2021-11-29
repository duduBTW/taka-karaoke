import type { NextPage } from "next";

// components
import React from "react";
import { MusicasProvider } from "components/organisms/Providers/MusicasProvider/MusicasProvider";
import SetList from "components/organisms/SetList";

const SetListPage: NextPage = () => {
  return (
    <MusicasProvider>
      <SetList />
    </MusicasProvider>
  );
};

export default SetListPage;
