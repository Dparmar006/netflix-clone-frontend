import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import Footer from "./Components/Footer";
import requests from "./requests";
function App() {
  return (
    <div className="app">
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
        RowTitle="Find your bae first"
        fetchUrl={requests.fetchRomanticMovies}
      />
      <Row RowTitle="LOL !" fetchUrl={requests.fetchComedyMovies} />
      <Footer />
    </div>
  );
}

export default App;
