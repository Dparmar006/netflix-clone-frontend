import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
function App() {
  return (
    <div className="app">
      <Row
        title="Get along with trends"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />
      <Row
        title="Netflix origionals"
        fetchUrl={requests.fetchNetflixOrigianls}
      />
      <Row title="Popular movies" fetchUrl={requests.fetchNext} />
      <Row title="Top notch !" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Find your bae first"
        fetchUrl={requests.fetchRomanticMovies}
      />
      <Row title="LOL !" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
