import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.movies, {params:{page}})
}

export {
    movieService
}