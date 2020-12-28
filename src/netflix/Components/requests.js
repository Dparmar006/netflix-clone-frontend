const APIKEY = "5870acf3e5005ffd9e33167ead268b03";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
  fetchNetflixOrigianls: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchPopulerMovies: "/discover/movie?sort_by=popularity.asc",
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&`,
  fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
};

export default requests;
