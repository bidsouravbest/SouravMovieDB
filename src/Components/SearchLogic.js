const API_LINK = "https://www.omdbapi.com?apikey=f6b2650f";
const [movies, setMovies] = useState([]);

const searchMoviesRoute = async (searchWord) => {
    try {
        const response = await fetch(`${API_LINK}&s=${searchWord}`);
        const data = await response.json();

        setMovies(data.Search);
    } catch (error) {
        console.log(error);
    }
};