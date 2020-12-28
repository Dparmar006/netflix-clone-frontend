import React from "react";
import Banner from "./netflix/Components/Banner";
import Navbar from "./netflix/Components/Navbar";
import Row from "./netflix/Components/Row";

import requests from "./netflix/Components/requests";
const Netflixapp = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row
        title="Get along with trends"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />
      <Row
        title="Netflix origionals"
        fetchUrl={requests.fetchNetflixOrigianls}
      />

      <Row title="Top notch !" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Find your bae first"
        fetchUrl={requests.fetchRomanticMovies}
      />
      <Row title="LOL !" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
};

export default Netflixapp;
