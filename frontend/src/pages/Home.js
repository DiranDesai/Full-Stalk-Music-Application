import React from "react";
import ArtistsRow from "../components/ArtistsRow";
import NewRealeses from "../components/NewRealeses";
import NotifyModal from "../components/NotifyModal";

function Home() {
  return (
    <div className="container-fluid">
      <NewRealeses heading="Trending Now" />
      <NewRealeses heading="Most Popular" />
      <ArtistsRow  heading="Popular Artist" />
    </div>
  );
}

export default Home;
