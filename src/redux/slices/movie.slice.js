import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    page: null,
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
            const {id} = action.payload;
            state.currentMovie = id
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                    const {
                        page,
                        results
                    } = action.payload;
                    state.page = page
                    // state.next = next
                    // state.prev = prev
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