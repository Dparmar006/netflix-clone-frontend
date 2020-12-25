const APIKEY = "5870acf3e5005ffd9e33167ead268b03";

const requests = {
    fetchPopulerMovies: "/discover/movie?sort_by=popularity.desc",
    fetchKidsMovies : "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
    fetchNetflixOrigianls: `/discover/tv?api_key=${APIKEY}&with_networks=213`
}

export default requests;