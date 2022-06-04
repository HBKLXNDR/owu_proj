import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:(page=1)=>axiosService.get(urls.movie, {params:{page}}),
    // getById:(id)=>axiosService.get(`${urls.movie}/${id}`)
}

export {
    movieService
}