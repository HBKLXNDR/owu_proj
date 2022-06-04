import React from 'react';
import css from "../Header/Header.module.css";
import {Link} from "react-router-dom";

const MovieListCard = ({movie, movie: {original_title, poster_path, release_date, id}}) => {
    return (
        <div className={css.item}>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} alt={original_title}/>
            <h3>{original_title}</h3>
            <p>{release_date}</p>
            <Link to={`/movie/${id.toString()}`} state={movie}>
                <button>Get Details</button>
            </Link>
        </div>
    );
};

export {MovieListCard};