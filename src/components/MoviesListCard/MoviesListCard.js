import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import css from "../Header/Header.module.css";


const MoviesListCard = () => {
    const {movies, genresArrForSearch, currentPage, total_pages} = useSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: "1"});
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(movieActions.getAll({
            page: query.get('page'),
            with_genres: genresArrForSearch.toString()
        }))
    }, [query, genresArrForSearch])

    useCallback(()=>{dispatch(movieActions.getGenres())},[])

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
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>Previous</button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>Next</button>
            </div>
            <div className={css.product_card}>{movies && movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}</div>
            <div className={css.buttons}>
                <button disabled={currentPage <= 1} onClick={prevPage}>Previous</button>
                <p>Now you are at the page {currentPage}</p>
                <button disabled={currentPage >= total_pages} onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export {MoviesListCard};