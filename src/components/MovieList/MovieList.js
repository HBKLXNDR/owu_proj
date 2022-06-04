import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from "../Header/Header.module.css";


const MovieList = () => {
    const {movies, next, prev} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: "1"});
    const dispatch = useDispatch();

    console.log(movies);

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
            <div className={css.product_card}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    );
};

export {MovieList};