import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard/MovieListCard";

const MovieList = () => {
    const {movies, next, prev} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: "1"});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get("page")}))
    }, [query])

    const nextPage = () => {
        const nextPage = +query.get("page") + 1;
        setQuery({page: `${nextPage}`})
    }
    const prevPage = () => {
        const prevPage = +query.get("page") - 1;
        setQuery({page: `${prevPage}`})
    }

    return (
        <div>
            <div>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <button disabled={!prev} onClick={prevPage}>Prev</button>
            <button disabled={!next} onClick={nextPage}>Next</button>
        </div>
    );
};

export {MovieList};