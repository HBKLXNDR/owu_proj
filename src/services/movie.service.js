import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const movieService = {
    getAll:()=>axiosService.get(urls.movie),
    getById:(id)=>axiosService.get(`${urls.movie}/${id}`)
}

export {
    movieService
}