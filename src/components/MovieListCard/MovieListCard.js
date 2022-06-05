import React from 'react';
import css from "../Header/Header.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices";

const MovieListCard = ({movie, movie: {original_title, poster_path, release_date, id}}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toSingleMovie = ()=>{
        dispatch(movieActions.currentMovie({episodeName:original_title}))
        navigate(`/movie/${id}`)
    }
    return (
        <div className={css.item} onClick={toSingleMovie}>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} alt={original_title}/>
            <h3>{original_title}</h3>
            <p>{release_date}</p>
            <p>id: {id}</p>

        </div>
    );
};

export {MovieListCard};