import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from "../Header/Header.module.css";


const MovieList = () => {
    const {movies, page} = useSelector(state => state.movies);
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
            <div className={css.product_card}>{movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            <div className={css.buttons}>
                <button disabled={page <= 1} onClick={prevPage}>Previous</button>
                <p>Now you are at the page {page}</p>
                <button disabled={page >= 500} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {MovieList};