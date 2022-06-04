import React from 'react';
import css from "../Header/Header.module.css";

const MovieListCard = ({movie:{original_title, poster_path, release_date}}) => {
    return (
        <div className={css.item}>
            <h3>{original_title}</h3>
            <img src={'https://image.tmdb.org/t/p/w400'+poster_path} alt={original_title}/>
            <p>{release_date}</p>
        </div>
    );
};

export {MovieListCard};