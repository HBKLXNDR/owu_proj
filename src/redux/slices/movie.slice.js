import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    page: null,
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

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}