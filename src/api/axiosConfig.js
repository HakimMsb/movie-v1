import axios from 'axios';

const MOVIE_API_BASE_URL = "http://localhost:8080/api/v1"

class axiosConfig{

    getMovies(){
        return axios.get(MOVIE_API_BASE_URL + "/movies");
    }

    getSingleMovie(imdbId){
        return axios.get(MOVIE_API_BASE_URL + "/movies/" + imdbId)
    }

    createReview(review){
        return axios.post(MOVIE_API_BASE_URL + "/reviews", review)
    }

}

export default new axiosConfig();