import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({baseURL});

const key_api = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGUyN2E0MDZhZjNkZDZmMmIxM2IzYTIyYjc0MTZjNCIsInN1YiI6IjYyOWE5MjdlNjVlMGEyMTFmZjQ2MGIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ocm1iPuUXwiiTnFOwnnAke2eb5kxx8ixE3V1tR5Od3g"

axiosService.interceptors.request.use((config) => {


    config.headers.Authorization = `Bearer ${key_api}`
    return config
})


export {
    axiosService
}