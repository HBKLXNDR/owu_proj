import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movie.service";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    movies: [],
    currentMovie: null

};

const getAll = createAsyncThunk(
    "episodeSlice/getAll",
    async ({page}) => {
        const {data} = await movieService.getAll(page);
        return data
    }
)

const movieSlice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        currentMovie: (state, action) => {
            const {movieName} = action.payload
            state.currentMovie = movieName
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                    const {
                        info: {
                            pages, next, prev
                        },
                        results
                    } = action.payload;
                    state.pages = pages
                    state.next = next
                    state.prev = prev
                    state.movies = results
                }
            )
    }
});

const {reducer: movieReducer, actions: {currentMovie}} = movieSlice;

const movieActions = {
    getAll,
    currentMovie
}

export {
    movieReducer,
    movieActions
}