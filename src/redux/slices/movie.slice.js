import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    pages: null,
    next: null,
    prev: null,
    movies: [],

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

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}