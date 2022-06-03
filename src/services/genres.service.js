import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const genresService = {
    getAll:()=>axiosService.get(urls.genre),
    getById:(id)=>axiosService.get(`${urls.genre}/${id}`)

}

export {
    genresService
}