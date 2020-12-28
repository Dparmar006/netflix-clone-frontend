import React from "react";
import Banner from "./netflix/Components/Banner";
import Navbar from "./netflix/Components/Navbar";
import Row from "./netflix/Components/Row";

import requests from "./netflix/Components/requests";
import Footer from "./netflix/Components/Footer";
const Netflixapp = () => {
  return (
    <div className="netflix__app">
      <Navbar />
      <Banner />
      <Row
        RowTitle="Get along with trends"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />
      <Row
        RowTitle="Netflix origionals"
        fetchUrl={requests.fetchNetflixOrigianls}
      />

      <Row RowTitle="Top notch !" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Find your bae first"
        fetchUrl={requests.fetchRomanticMovies}
      />
      <Row RowTitle="LOL !" fetchUrl={requests.fetchComedyMovies} />
      <Footer />
    </div>
  );
};

export default Netflixapp;
