import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    currentPage: null,
    total_pages: null,
    movies: null,
    genres: [],
    details: {},
    genresOfOneMovie: '',
    genresArrForSearch: []

};

const getDetails = createAsyncThunk(
    "moviesSLice/getDetails",
    async ({id}) => {
        const {data} = await movieService.details(id)
        return data
    }
)

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page, with_genres}) => {
        const {data} = await movieService.getAllMovies(page, with_genres)
        return data
    }
)

const getGenres = createAsyncThunk(
    "moviesSlice/getGenres",
    async () => {
        const {data} = await movieService.getGenres()
        return data
    }
)


const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        genresForSearch: ((state, action) => {
            state.genresArrForSearch = action.payload.genresArray.genresArray
        }),
        resetGenresArrForSearch: ((state) => {
            state.genresArrForSearch = false
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
                    const {
                        page,
                        results
                    } = action.payload;
                    state.currentPage = page
                    state.movies = results
                    state.total_pages = action.payload.total_pages
                    state.currentMovies = false
                }
            ))
            .addCase(getGenres.fulfilled, ((state, action) => {
                state.genres = action.payload.genres
            }))
            .addCase(getDetails.fulfilled, ((state, action) => {
                state.details = action.payload
                const {genres} = action.payload
                state.details = action.payload
                const genresArr = genres.map((value) => value.name)
                state.genresOfOneMovie = genresArr.toString().replaceAll(",", ",").toLowerCase()
            }))
    }
});

const {reducer: movieReducer, actions: {genresForSearch, resetGenresArrForSearch}} = movieSlice;

const movieActions = {
    getAll,
    getDetails,
    getGenres,
    genresForSearch,
    resetGenresArrForSearch
}

export {
    movieReducer,
    movieActions
}