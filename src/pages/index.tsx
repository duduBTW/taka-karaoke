import type { NextPage } from "next";

// components
import HomeTemplate from "components/templates/HomeTemplate";
import React from "react";
import { MusicasProvider } from "components/organisms/Providers/MusicasProvider/MusicasProvider";

const Home: NextPage = () => {
  return (
    <MusicasProvider>
      <HomeTemplate />
    </MusicasProvider>
  );
};

export default Home;
